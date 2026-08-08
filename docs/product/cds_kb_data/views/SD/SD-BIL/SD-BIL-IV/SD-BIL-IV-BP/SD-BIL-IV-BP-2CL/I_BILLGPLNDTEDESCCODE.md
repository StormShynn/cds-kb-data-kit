---
name: I_BILLGPLNDTEDESCCODE
description: "Billing Plan Date Description"
app_component: SD-BIL-IV-BP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLGPLNDTEDESCCODE')/$value
semantic_en: "Billing Plan Date Description"
semantic_vi: "Billing Plan Date Description — CDS view giao diện dựa trên tvtb."
keywords:
  - "billing"
  - "plan"
  - "date"
  - "description"
  - "code"
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
# I_BILLGPLNDTEDESCCODE

**Billing Plan Date Description**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IV-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLGPLNDTEDESCCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingPlanDateDescriptionCode` | ✓ | |  | `tetbe` | `CHAR(4)` | Date Description |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BillgPlnDteDescTxt` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLGPLNDTEDESCCODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLGPLNDTEDESCCODE')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'BillingPlanDateDescriptionCode'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Billing Plan Date Description'
@Analytics: { dataCategory: #DIMENSION,
              internalName: #LOCAL  }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'IBPLANDTEDESC'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations:true
//@ObjectModel.alternativeKey: [ { id : 'Domain',
//                                 uniqueness: #UNIQUE,
//                                 element: ['DomainValue'] } ]
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER]
@Analytics.dataExtraction.enabled: true
@Analytics.dataExtraction.delta.changeDataCapture.automatic: true
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.sapObjectNodeType.name: 'BillingPlanDateDescriptionCode'

define view I_BillgPlnDteDescCode
  as select from tvtb
  association [0..*] to I_BillgPlnDteDescTxt as _Text on $projection.BillingPlanDateDescriptionCode = _Text.BillingPlanDateDescriptionCode
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH   
  key tetbe as BillingPlanDateDescriptionCode,

      _Text
};
```
