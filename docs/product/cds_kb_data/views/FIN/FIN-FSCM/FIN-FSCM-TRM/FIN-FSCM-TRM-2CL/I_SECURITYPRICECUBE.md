---
name: I_SECURITYPRICECUBE
description: "This CDS view provides the prerequisites for answering the following business questions: What is the security price of a security class on a specific date? What is the currency for the security class? Where is the security class exchanged and what is the name of the exchange?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITYPRICECUBE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is the security price of a security class on a specific date? What is the currency for the security class? Where is the security class exchanged and what is the name of the exchange?"
semantic_vi: "Market Data Security Price - Cube — CDS view giao diện dựa trên I_SecurityPrice."
keywords:
  - "market"
  - "data"
  - "security"
  - "price"
  - "cube"
  - "class"
  - "exchange"
  - "calendar"
  - "date"
  - "type"
  - "stock"
  - "crcy"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
---
# I_SECURITYPRICECUBE

**This CDS view provides the prerequisites for answering the following business questions: What is the security price of a security class on a specific date? What is the currency for the security class? Where is the security class exchanged and what is the name of the exchange?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITYPRICECUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SecurityClass` | ✓ | |  |  | `CHAR(13)` | Security Class ID Number |
| `SecurityExchange` | ✓ | |  |  | `CHAR(10)` | Security exchange |
| `CalendarDate` | ✓ | |  | `TreasuryPriceDate` | `DATS(8)` | Calendar Date |
| `SecurityClassPriceType` | ✓ | |  |  | `CHAR(2)` | Market Data: Security Price Type |
| `SecurityClassStockPriceCrcy` |  | |  |  | `CUKY(5)` | Quotation Currency (that prices are in) |
| `SecurityClassValueInQtanUnit` |  | |  | `cast( SecPrice.SecurityClassValueInQtanUnit as ftr_gen_securities_price_l )` | `DEC(23)` | Price of Unit- or Percentage-Quoted Security |
| `_SecClass` | | ✓ | | | | |
| `_Exchange` | | ✓ | | | | |
| `_CalendarDate` | | ✓ | | | | |
| `_QuotationType` | | ✓ | | | | |
| `_SecurityClassStockPriceCrcy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SecClass` | `I_SecurityClass` | [1..1] |
| `_Exchange` | `I_SecurityExchange` | [1..1] |
| `_CalendarDate` | `I_CalendarDate` | [1..1] |
| `_QuotationType` | `I_SecurityPriceType` | [1..1] |
| `_SecurityClassStockPriceCrcy` | `I_Currency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITYPRICECUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITYPRICECUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISECPRICECUBE'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.allowExtensions:true
@Analytics.dataCategory: #CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_CUBE ]
@Metadata.ignorePropagatedAnnotations:true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #COMPOSITE
@AbapCatalog.preserveKey:true
@Analytics.internalName:#LOCAL 
@ObjectModel.representativeKey: 'SecurityClass'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #L
@EndUserText.label: 'Market Data Security Price - Cube'
define view I_SecurityPriceCube 
        as select from  I_SecurityPrice  as SecPrice    
           association [1..1] to I_SecurityClass      as _SecClass      on _SecClass.SecurityClass           = $projection.SecurityClass      
           association [1..1] to I_SecurityExchange   as _Exchange      on _Exchange.SecurityExchange        = $projection.SecurityExchange                                                                  
           association [1..1] to I_CalendarDate       as _CalendarDate  on _CalendarDate.CalendarDate        = $projection.CalendarDate                    
           association [1..1] to I_SecurityPriceType  as _QuotationType on _QuotationType.PriceQuotationType = $projection.SecurityClassPriceType
           association [0..1] to I_Currency            as _SecurityClassStockPriceCrcy on $projection.SecurityClassStockPriceCrcy   = _SecurityClassStockPriceCrcy.Currency                                                                
    {   
        @EndUserText.label: 'Security Class' 
        @ObjectModel.foreignKey.association: '_SecClass'
        key SecPrice.SecurityClass,
        
        @ObjectModel.foreignKey.association: '_Exchange'
        @EndUserText.label: 'Security Exchange'
        key SecPrice.SecurityExchange, 
        @ObjectModel.foreignKey.association: '_CalendarDate'
        key SecPrice.TreasuryPriceDate as CalendarDate,
  
        @ObjectModel.foreignKey.association: '_QuotationType'
        key SecPrice.SecurityClassPriceType,
        
        @ObjectModel.foreignKey.association: '_SecurityClassStockPriceCrcy'
            SecPrice.SecurityClassStockPriceCrcy,
            cast( SecPrice.SecurityClassValueInQtanUnit as ftr_gen_securities_price_l ) as SecurityClassValueInQtanUnit,

            _SecClass,
            _Exchange,
            _CalendarDate,
            _QuotationType,
            _SecurityClassStockPriceCrcy  

    }
```
