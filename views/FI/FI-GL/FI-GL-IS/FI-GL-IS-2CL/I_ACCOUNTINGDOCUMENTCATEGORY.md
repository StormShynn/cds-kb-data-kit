---
name: I_ACCOUNTINGDOCUMENTCATEGORY
description: Accounting DocumentUMENTCATEGORY
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - accounting-document
  - document
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_ACCOUNTINGDOCUMENTCATEGORY

**Accounting DocumentUMENTCATEGORY**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `AccountingDocumentCategory` | ✓ | |  | `cast( domvalue_l as farp_bstat_d )` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AccountingDocumentCategoryT` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Accounting Document Category'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIACCDOCCAT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'AccountingDocumentCategory'
@AbapCatalog.buffering.status: #NOT_ALLOWED
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]
@Search.searchable: true
define view I_AccountingDocumentCategory
  as select from dd07l
  association [0..*] to I_AccountingDocumentCategoryT as _Text on $projection.AccountingDocumentCategory = _Text.AccountingDocumentCategory
{
      @ObjectModel.text.association: '_Text'
  key cast( domvalue_l as farp_bstat_d ) as AccountingDocumentCategory,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                   as DomainValue,
      _Text
}
where
      dd07l.domname  = 'BSTAT'
  and dd07l.as4local = 'A';
```
