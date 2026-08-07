---
name: I_BILLOFOPERATIONSSEQUENCECAT
description: "Bill of Operations Sequence Category"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLOFOPERATIONSSEQUENCECAT')/$value
semantic_en: "Bill of Operations Sequence Category"
semantic_vi: "Bill of Operations Sequence Category — CDS view giao diện dựa trên I_SequenceCategory."
keywords:
  - "bill"
  - "operations"
  - "sequence"
  - "category"
tags:
  - PP
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
---
# I_BILLOFOPERATIONSSEQUENCECAT

**Bill of Operations Sequence Category**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLOFOPERATIONSSEQUENCECAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfOperationsSequenceCat` | ✓ | |  | `SequenceCategory` | `CHAR(1)` | Sequence Category |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BOOSequenceCatText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLOFOPERATIONSSEQUENCECAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLOFOPERATIONSSEQUENCECAT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPPBOOSEQCAT'
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'BillOfOperationsSequenceCat'
@ObjectModel.semanticKey: 'BillOfOperationsSequenceCat'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Bill of Operations Sequence Category'
@ObjectModel.sapObjectNodeType.name: 'BillOfOperationsSequenceCat'
@Analytics.dataExtraction.enabled: true

define view I_BillOfOperationsSequenceCat
  as select from I_SequenceCategory

  association [0..*] to I_BOOSequenceCatText as _Text on $projection.BillOfOperationsSequenceCat = _Text.BillOfOperationsSequenceCat
{
      // Key
      @ObjectModel.text.association: '_Text'
  key SequenceCategory as BillOfOperationsSequenceCat,

      // Associations
      _Text
};
```
