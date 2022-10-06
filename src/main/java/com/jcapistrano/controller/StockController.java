package com.jcapistrano.controller;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.jcapistrano.entity.Stocks;
import com.jcapistrano.repository.StocksRepository;
import com.univocity.parsers.common.record.Record;
import com.univocity.parsers.csv.CsvParser;
import com.univocity.parsers.csv.CsvParserSettings;

@RestController
public class StockController {

	@Autowired
	StocksRepository service;

	@PostMapping("/upload")
	public String uploadData(@RequestParam("file") MultipartFile file)throws Exception{
		List<Stocks> stocksList = new ArrayList<>();
		InputStream inputStream = file.getInputStream();
		CsvParserSettings setting = new CsvParserSettings();
		setting.setHeaderExtractionEnabled(true);
		
		CsvParser parser = new CsvParser(setting);
		List<Record> parseAllRecords = parser.parseAllRecords(inputStream);
		parseAllRecords.forEach(record -> {
			Stocks stock = new Stocks();
			stock.setQuarter(Integer.parseInt(record.getString("quarter")));
			stock.setStock(record.getString("stock"));
			stock.setDate(record.getString("date"));
			stock.setOpen(record.getString("open"));
			stock.setHigh(record.getString("high"));
			stock.setLow(record.getString("low"));
			stocksList.add(stock);
		});
		service.saveAll(stocksList);
		return "Upload Successfully!";
	}
}
