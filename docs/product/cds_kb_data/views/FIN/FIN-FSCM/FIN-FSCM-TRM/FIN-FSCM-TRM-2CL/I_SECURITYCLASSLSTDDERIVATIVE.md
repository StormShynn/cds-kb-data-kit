---
name: I_SECURITYCLASSLSTDDERIVATIVE
description: "Security Class Listed Derivative"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITYCLASSLSTDDERIVATIVE')/$value
semantic_en: "Security Class Listed Derivative"
semantic_vi: "Security Class Listed Derivative — CDS view giao diện dựa trên vtideri."
keywords:
  - "security"
  - "class"
  - "listed"
  - "derivative"
  - "quotation"
  - "category"
  - "option"
  - "call"
  - "code"
  - "financial"
  - "instrument"
  - "product"
  - "type"
tags:
  - FIN
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
---
# I_SECURITYCLASSLSTDDERIVATIVE

**Security Class Listed Derivative**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITYCLASSLSTDDERIVATIVE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SecurityClass` | ✓ | |  | `cast(ranl as ftr_gen_security_class preserving type)` | `CHAR(13)` | Security Class |
| `ListedDerivativeQuotation` |  | |  | `cast(snottype as ftr_gen_listed_deriv_quotation preserving type )` | `CHAR(1)` | Listed Derivative Quotation |
| `ListedDerivativeCategory` |  | |  | `softyp` | `NUMC(2)` | Options/futures category |
| `OptionPutCallCode` |  | |  | `sputcall` | `NUMC(1)` | Put/Call Indicator |
| `FinancialInstrumentProductType` |  | |  | `sgsart` | `CHAR(3)` | Product Type |
| `LstdDerivative1stQuotationDate` |  | |  | `cast(debeg as ftr_gen_first_quotation_date preserving type )` | `DATS(8)` | First Quotation Date |
| `LstdDerivativeLastQuotationDte` |  | |  | `cast(dlhandel as ftr_gen_last_quotation_date preserving type )` | `DATS(8)` | First Quotation Date |
| `ListedDerivativeSettlementDate` |  | |  | `derfuell` | `DATS(8)` | Settlement Date |
| `ListedDerivativeTermEndDate` |  | |  | `cast(dverfall as delfz preserving type )` | `DATS(8)` | End of Term |
| `_SecurityClass` | | ✓ | | | | |
| `_ListedDerivativeQuotation` | | ✓ | | | | |
| `_ListedDerivativeCategory` | | ✓ | | | | |
| `_OptionPutCallCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SecurityClass` | `I_SecurityClass` | [0..1] |
| `_ListedDerivativeQuotation` | `I_ListedDerivativeQuotation` | [0..1] |
| `_ListedDerivativeCategory` | `I_ListedDerivativeCategory` | [0..1] |
| `_OptionPutCallCode` | `I_OptionPutCallCode` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITYCLASSLSTDDERIVATIVE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITYCLASSLSTDDERIVATIVE')/$value)*

```abap
// harmonized annotations 
@AbapCatalog.buffering.status: #NOT_ALLOWED 
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true // only if required by ATC check 
@AbapCatalog.sqlViewName: 'ISECLSTDDRVTV' 
@AccessControl.authorizationCheck: #CHECK // according to XLS / DCL 
@Analytics.dataCategory: #DIMENSION 
@Analytics.dataExtraction.enabled: true // use only if view is customizing or small master data 
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Security Class Listed Derivative'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'SecurityClass'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L 
@Metadata.allowExtensions:true 
@Metadata.ignorePropagatedAnnotations: true // For C1-Release   
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'SecurityClassListedDerivative'

define view I_SecurityClassLstdDerivative
  as select from vtideri
  
  association [0..1] to I_SecurityClass as _SecurityClass on $projection.SecurityClass = _SecurityClass.SecurityClass  
  association [0..1] to I_ListedDerivativeQuotation as _ListedDerivativeQuotation on $projection.ListedDerivativeQuotation = _ListedDerivativeQuotation.ListedDerivativeQuotation

  association [0..1] to I_ListedDerivativeCategory  as _ListedDerivativeCategory  on $projection.ListedDerivativeCategory = _ListedDerivativeCategory.ListedDerivativeCategory
  association [0..1] to I_OptionPutCallCode         as _OptionPutCallCode         on $projection.OptionPutCallCode = _OptionPutCallCode.OptionPutCallCode

{
  key cast(ranl as ftr_gen_security_class preserving type)              as SecurityClass,
      cast(snottype as ftr_gen_listed_deriv_quotation preserving type ) as ListedDerivativeQuotation,
      softyp                                                            as ListedDerivativeCategory,
      sputcall                                                          as OptionPutCallCode,
      sgsart                                                            as FinancialInstrumentProductType,
      cast(debeg as ftr_gen_first_quotation_date preserving type )      as LstdDerivative1stQuotationDate,
      cast(dlhandel as ftr_gen_last_quotation_date preserving type )    as LstdDerivativeLastQuotationDte,
      derfuell                                                          as ListedDerivativeSettlementDate,
      cast(dverfall as delfz preserving type )                          as ListedDerivativeTermEndDate,
     
      _SecurityClass,
      _ListedDerivativeQuotation, // Make association public
      _ListedDerivativeCategory,
      _OptionPutCallCode
}
```
