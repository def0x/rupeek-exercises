-- 1
use world;

-- 2
show tables;

-- 3 
desc city;
desc country;
desc countrylanguage;

-- 4
select * from city;
select * from country;
select * from countrylanguage;

-- 5
select Code 
from country 
where continent like 'North America';

-- 6
select * 
from countryLanguage
where language like 'English' and isOfficial = 'T' and CountryCode in (
		select code 
		from country 
		where continent like 'North America'
    );

-- 7
select name,count(name) from city group by name ;

-- 8
select country.name,count(*) as total_cities
from country,city
where country.code = city.countryCode
group by country.name
order by total_cities desc;