---
name: I_EWM_PINVPROCEDURETEXT
description: "Whse Phys Inventory Procedure - Text"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PINVPROCEDURETEXT')/$value
semantic_en: "Whse Phys Inventory Procedure - Text"
semantic_vi: "Whse Phys Inventory Procedure - Text — CDS view giao diện dựa trên Whse Phys Inventory Procedure - Text."
keywords:
  - "whse"
  - "phys"
  - "inventory"
  - "procedure"
  - "text"
  - "language"
  - "physical"
  - "document"
  - "type"
tags:
  - SCM
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - inventory
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# I_EWM_PINVPROCEDURETEXT

**Whse Phys Inventory Procedure - Text**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PINVPROCEDURETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `PhysicalInventoryDocumentType` | ✓ | |  | `doc_type` | `CHAR(2)` | Physical Inventory Procedure (Document Type of Phys. Inv.) |
| `PInvDocumentTypeText` |  | |  | `txt` | `CHAR(50)` | Short Text |
| `_DocType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DocType` | `I_EWM_PhysicalInventoryDocType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PINVPROCEDURETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PINVPROCEDURETEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Whse Phys Inventory Procedure - Text'

@VDM.viewType:#BASIC

@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IEWMPIPROCEDURET'
@ObjectModel.representativeKey: 'PhysicalInventoryDocumentType'
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #M}
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
             #SQL_DATA_SOURCE,
             #CDS_MODELING_DATA_SOURCE,
             #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT                                      
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable
define view entity I_EWM_PInvProcedureText
  as select from /lime/pi_dctytxt
  association [0..1] to I_EWM_PhysicalInventoryDocType as _DocType on $projection.PhysicalInventoryDocumentType = _DocType.PhysicalInventoryDocumentType
  association [0..1] to I_Language                     as _Language    on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras    as Language,
      @ObjectModel.foreignKey.association:'_DocType'
      @ObjectModel.text.element: ['PInvDocumentTypeText']
  key doc_type as PhysicalInventoryDocumentType,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      txt      as PInvDocumentTypeText,
      _DocType,
      _Language
}
```
