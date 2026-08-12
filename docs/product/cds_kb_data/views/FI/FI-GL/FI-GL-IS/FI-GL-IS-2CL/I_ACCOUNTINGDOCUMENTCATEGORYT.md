---
name: I_ACCOUNTINGDOCUMENTCATEGORYT
description: "Accounting DocumentUMENTCATEGORYT"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_ACCOUNTINGDOCUMENTCATEGORYT

**Accounting DocumentUMENTCATEGORYT**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AccountingDocumentCategory` | ✓ | |  | `cast( domvalue_l as farp_bstat_d )` |  |  |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` |  |  |
| `AccountingDocumentCategoryName` |  | |  | `cast(ddtext as fis_val_text preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Accounting Document Category - Text'
@Analytics: { dataExtraction.enabled: true }
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIACCDOCCATT'
@ObjectModel.representativeKey: 'AccountingDocumentCategory'
@AbapCatalog.buffering.status: #NOT_ALLOWED
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#LANGUAGE_DEPENDENT_TEXT,#EXTRACTION_DATA_SOURCE]
@Search.searchable: true
define view I_AccountingDocumentCategoryT
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element: ['AccountingDocumentCategoryName']
  key cast( domvalue_l as farp_bstat_d )           as AccountingDocumentCategory,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( ddlanguage as spras )                  as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      cast(ddtext as fis_val_text preserving type) as AccountingDocumentCategoryName,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                             as DomainValue,
      _Language
}

where
      domname  = 'BSTAT'
  and as4local = 'A';
```
