---
name: I_COLLATERALDOCUMENTTYPE
description: "Collateral Document Type"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALDOCUMENTTYPE')/$value
semantic_en: "Collateral Document Type"
semantic_vi: "Collateral Document Type — CDS view giao diện dựa trên tcms_doc_typ."
keywords:
  - "collateral"
  - "document"
  - "type"
tags:
  - FS
  - component:FS-CMS
  - document
  - FS-CMS
  - interface-view
---
# I_COLLATERALDOCUMENTTYPE

**Collateral Document Type**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALDOCUMENTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralDocumentType` | ✓ | |  | `doc_type` | `CHAR(6)` | Document Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CollateralDocumentTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALDOCUMENTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALDOCUMENTTYPE')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICOLDOCTYPE',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'CollateralDocumentType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Collateral Document Type'
define view I_CollateralDocumentType
  as select from tcms_doc_typ
  association [0..*] to I_CollateralDocumentTypeText as _Text on $projection.CollateralDocumentType = _Text.CollateralDocumentType
{
      @ObjectModel.text.association: '_Text'
  key doc_type as CollateralDocumentType,

      _Text
}
```
