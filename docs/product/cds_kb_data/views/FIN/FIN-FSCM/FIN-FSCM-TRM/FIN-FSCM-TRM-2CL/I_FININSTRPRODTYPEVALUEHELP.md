---
name: I_FININSTRPRODTYPEVALUEHELP
description: "Product Type"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FININSTRPRODTYPEVALUEHELP')/$value
semantic_en: "Product Type"
semantic_vi: "Product Type — CDS view giao diện dựa trên I_FinancialinstrProductType."
keywords:
  - "product"
  - "type"
  - "financial"
  - "instrument"
  - "treasury"
  - "contract"
  - "instr"
  - "category"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - product
---
# I_FININSTRPRODTYPEVALUEHELP

**Product Type**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FININSTRPRODTYPEVALUEHELP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialInstrumentProductType` | ✓ | |  |  | `CHAR(3)` | Product Type |
| `TreasuryContractType` |  | |  |  | `CHAR(1)` | Contract Type |
| `FinancialInstrProductCategory` |  | |  |  | `NUMC(3)` | Product Category |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FININSTRPRODTYPEVALUEHELP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FININSTRPRODTYPEVALUEHELP')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFIPTP_VH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@VDM.viewType: #BASIC
@ObjectModel: { dataCategory: #VALUE_HELP,
                representativeKey: 'FinancialInstrumentProductType',
                usageType.sizeCategory: #M,
                usageType.dataClass: #CUSTOMIZING,
                usageType.serviceQuality: #A,
                supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY],
                modelingPattern: #VALUE_HELP_PROVIDER }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Product Type'

define view I_FinInstrProdTypeValueHelp 
  as select from I_FinancialinstrProductType 
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
  key FinancialInstrumentProductType,
      @Search.defaultSearchElement: true
      @Search.ranking: #LOW
      TreasuryContractType,
      @Search.defaultSearchElement: true
      @Search.ranking: #LOW
      FinancialInstrProductCategory,

      _Text
}
```
