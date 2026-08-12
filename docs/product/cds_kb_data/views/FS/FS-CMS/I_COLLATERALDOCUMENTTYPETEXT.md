---
name: I_COLLATERALDOCUMENTTYPETEXT
description: "Collateral Document Type - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALDOCUMENTTYPETEXT')/$value
semantic_en: "Collateral Document Type - Text"
semantic_vi: "Collateral Document Type - Text — CDS view giao diện dựa trên tcms_doc_typ_t."
keywords:
  - "collateral"
  - "document"
  - "type"
  - "text"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - document
  - FS-CMS
  - interface-view
---
# I_COLLATERALDOCUMENTTYPETEXT

**Collateral Document Type - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALDOCUMENTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralDocumentType` | ✓ | |  | `doc_type` | `CHAR(6)` | Document Type |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which Description is Required |
| `CollateralDocumentTypeText` |  | |  | `name` | `CHAR(40)` | Document Name |
| `_Language` | | ✓ | | | | |
| `_CollateralDocumentType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CollateralDocumentType` | `I_CollateralDocumentType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALDOCUMENTTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALDOCUMENTTYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICOLDOCTYPETXT',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    dataCategory: #TEXT,
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'CollateralDocumentType'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Collateral Document Type - Text'
define view I_CollateralDocumentTypeText
  as select from tcms_doc_typ_t
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
  association [0..1] to I_CollateralDocumentType as _CollateralDocumentType on $projection.CollateralDocumentType = _CollateralDocumentType.CollateralDocumentType
{
      @ObjectModel.foreignKey.association: '_CollateralDocumentType'
  key doc_type as CollateralDocumentType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language as Language,
      @Semantics.text: true
      name     as CollateralDocumentTypeText,

      _Language,
      _CollateralDocumentType
}
```
