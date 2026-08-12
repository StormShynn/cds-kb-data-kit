---
name: I_PRODUCTSTRUCTURENODETEXT
description: "Product Structure Node - Text"
app_component: PLM-WUI-OBJ-PSM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTSTRUCTURENODETEXT')/$value
semantic_en: "Product Structure Node - Text"
semantic_vi: "Product Structure Node - Text — CDS view giao diện dựa trên pnodtx."
keywords:
  - "product"
  - "structure"
  - "node"
  - "text"
  - "language"
  - "prod"
  - "struc"
  - "description"
tags:
  - PLM
  - bo:material
  - component:PLM-WUI-OBJ-PSM-2CL
  - interface-view
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-PSM
  - PLM-WUI-OBJ-PSM-2CL
  - product
---
# I_PRODUCTSTRUCTURENODETEXT

**Product Structure Node - Text**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-PSM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTSTRUCTURENODETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductStructureNodeUUID` | ✓ | |  | `pnguid` | `RAW(16)` | Internal Number of iPPE Node |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `ProdStrucNodeDescription` |  | |  | `pntext` | `CHAR(60)` | Short Text for iPPE Node |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTSTRUCTURENODETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTSTRUCTURENODETEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPSNODETEXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'ProductStructureNodeUUID'
@ObjectModel.dataCategory: #TEXT

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY ]

@EndUserText.label: 'Product Structure Node - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
define view I_ProductStructureNodeText
  as select from pnodtx
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key pnguid  as ProductStructureNodeUUID,
 --   @ObjectModel.foreignKey.association: '_VariantChangeState'
 -- key pntxcnt as ProdStrucNodeTxtChgStateIntID,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key spras   as Language,
      @Semantics.text
      pntext  as ProdStrucNodeDescription,
      _Language
}
```
