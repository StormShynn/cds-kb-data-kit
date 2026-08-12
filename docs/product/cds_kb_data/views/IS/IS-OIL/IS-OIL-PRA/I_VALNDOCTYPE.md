---
name: I_VALNDOCTYPE
description: "Valuation Document Type"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VALNDOCTYPE')/$value
semantic_en: "Valuation Document Type"
semantic_vi: "Valuation Document Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "valuation"
  - "document"
  - "type"
tags:
  - IS
  - component:IS-OIL-PRA
  - document
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_VALNDOCTYPE

**Valuation Document Type**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VALNDOCTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ValuationDocumentType` | ✓ | |  | `cast (domvalue_l as oiu_doc_type )` | `CHAR(4)` | Valuation Document Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ValnDocTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VALNDOCTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VALNDOCTYPE')/$value)*

```abap
@EndUserText.label: 'Valuation Document Type'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVVALNDOCTYPE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'ValuationDocumentType'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRAValuationDocumentType'

define view I_ValnDocType
  as select from dd07l
  association [0..*] to I_ValnDocTypeText as _Text on $projection.ValuationDocumentType = _Text.ValuationDocumentType
{
      @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as oiu_doc_type ) as ValuationDocumentType,
      _Text
}
where
      domname  = 'OIU_DOC_TYPE'
  and as4local = 'A';
```
