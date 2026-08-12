---
name: I_BILLGPLNDTEDESCTXT
description: "Billing Plan Date Description - Text"
app_component: SD-BIL-IV-BP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLGPLNDTEDESCTXT')/$value
semantic_en: "Billing Plan Date Description - Text"
semantic_vi: "Billing Plan Date Description - Text — CDS view giao diện dựa trên tvtbt."
keywords:
  - "billing"
  - "plan"
  - "date"
  - "description"
  - "text"
  - "code"
  - "language"
tags:
  - SD
  - billing
  - bo:billingdocument
  - component:SD-BIL-IV-BP-2CL
  - interface-view
  - lob:sales & distribution
  - plan
  - SD-BIL
  - SD-BIL-IV
  - SD-BIL-IV-BP
  - SD-BIL-IV-BP-2CL
---
# I_BILLGPLNDTEDESCTXT

**Billing Plan Date Description - Text**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IV-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLGPLNDTEDESCTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingPlanDateDescriptionCode` | ✓ | |  | `tetbe` | `CHAR(4)` | Date Description |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `BillingPlanDateDescription` |  | |  | `tebez` | `CHAR(40)` | Date description |
| `_BillgPlnDteDescCode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillgPlnDteDescCode` | `I_BillgPlnDteDescCode` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLGPLNDTEDESCTXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLGPLNDTEDESCTXT')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'BillingPlanDateDescriptionCode'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Billing Plan Date Description - Text'
@VDM.viewType:#BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'IBPLANDTEDESCT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations:true
@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_BillgPlnDteDescTxt
  as select from tvtbt
  association [0..1] to I_BillgPlnDteDescCode as _BillgPlnDteDescCode on $projection.BillingPlanDateDescriptionCode = _BillgPlnDteDescCode.BillingPlanDateDescriptionCode
  association [0..1] to I_Language            as _Language            on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_BillgPlnDteDescCode'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH  
  key tetbe as BillingPlanDateDescriptionCode,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW 
      tebez as BillingPlanDateDescription,

      _BillgPlnDteDescCode,
      _Language
};
```
