---
name: I_LETTEROFCREDIT
description: "Caution Do not use this CDS view. Instead, use the CDS view Financial Transaction Current Activity (I_FinTransCurrentActivity). This CDS view provides the prerequisites for answering the following business questions: Which letters of credit are available? What is the name of a letter of credit?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LETTEROFCREDIT')/$value
semantic_en: "Caution Do not use this CDS view. Instead, use the CDS view Financial Transaction Current Activity (I_FinTransCurrentActivity). This CDS view provides the prerequisites for answering the following business questions: Which letters of credit are available? What is the name of a letter of credit?"
semantic_vi: "Letter of Credit — CDS view giao diện dựa trên tlct_activity."
keywords:
  - "letter"
  - "credit"
  - "company"
  - "code"
  - "financial"
  - "transaction"
  - "instrument"
  - "activity"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - transaction
---
# I_LETTEROFCREDIT

**Caution Do not use this CDS view. Instead, use the CDS view Financial Transaction Current Activity (I_FinTransCurrentActivity). This CDS view provides the prerequisites for answering the following business questions: Which letters of credit are available? What is the name of a letter of credit?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LETTEROFCREDIT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `FinancialTransaction` | ✓ | |  | `rfha` | `CHAR(13)` | Financial Transaction |
| `FinancialInstrumentActivity` | ✓ | |  | `rfhazu` | `NUMC(5)` | Transaction Activity |
| `LetterOfCredit` |  | |  | `lc_number` | `CHAR(16)` | Letter of Credit Number |
| `_CompanyCode` | | ✓ | | | | |
| `_FinancialTransaction` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_FinancialTransaction` | `I_FinancialTransaction` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LETTEROFCREDIT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LETTEROFCREDIT')/$value)*

```abap
// harmonized annotations
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ILETTEROFCREDIT'
@AccessControl.authorizationCheck: #CHECK // DCL to be created
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
//@Analytics.dataExtraction.enabled: true // use only if view is customizing or small master data --> false
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Letter of Credit'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.representativeKey: 'FinancialInstrumentActivity'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@Metadata.allowExtensions:true 
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@Search.searchable: true
@Consumption.ranked: true

define view I_LetterOfCredit as select from tlct_activity as LetterOfCredit 

  association [0..1] to I_CompanyCode as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_FinancialTransaction as _FinancialTransaction on $projection.CompanyCode          = _FinancialTransaction.CompanyCode
                                                                       and $projection.FinancialTransaction = _FinancialTransaction.FinancialTransaction
{   
  @Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_CompanyCodeStdVH',
            element:    'CompanyCode' }
  }]
  @ObjectModel.foreignKey.association: '_CompanyCode'
  @Search.defaultSearchElement: true
  @Search.ranking: #LOW 
  @UI.lineItem:[{ position : 2 }]  
  key LetterOfCredit.bukrs     as CompanyCode,
  @ObjectModel.foreignKey.association: '_FinancialTransaction'
  @Search.defaultSearchElement: true
  @Search.ranking: #LOW 
  @UI.lineItem:[{ position : 3 }]  
  key LetterOfCredit.rfha      as FinancialTransaction,
  @Search.defaultSearchElement: true
  @Search.ranking: #LOW 
  @UI.lineItem:[{ position : 4 }]  
  key LetterOfCredit.rfhazu    as FinancialInstrumentActivity, 
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  @Search.fuzzinessThreshold: 0.8
  @UI.lineItem:[{ position : 1 }]  
      LetterOfCredit.lc_number as LetterOfCredit,
 
      _CompanyCode, 
      _FinancialTransaction
}
```
