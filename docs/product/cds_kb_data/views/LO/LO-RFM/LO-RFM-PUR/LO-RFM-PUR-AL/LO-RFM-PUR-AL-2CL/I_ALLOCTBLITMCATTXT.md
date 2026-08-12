---
name: I_ALLOCTBLITMCATTXT
description: "Item Category - Text"
app_component: LO-RFM-PUR-AL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ALLOCTBLITMCATTXT')/$value
semantic_en: "Item Category - Text"
semantic_vi: "Item Category - Text — CDS view giao diện dựa trên t621t."
keywords:
  - "item"
  - "category"
  - "text"
  - "alloc"
  - "table"
  - "name"
  - "language"
  - "desc"
tags:
  - LO
  - component:LO-RFM-PUR-AL-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-PUR
  - LO-RFM-PUR-AL
  - LO-RFM-PUR-AL-2CL
  - lob:logistics general
---
# I_ALLOCTBLITMCATTXT

**Item Category - Text**

| Property | Value |
|---|---|
| App Component | `LO-RFM-PUR-AL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ALLOCTBLITMCATTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AllocTableItemCategoryName` | ✓ | |  | `cast(apstp as apstp preserving type )` | `CHAR(4)` | Item category of allocation table |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `AllocTblItmCatDesc` |  | |  | `apttx` | `CHAR(40)` | Description |
| `_ItemCatAllocation` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ItemCatAllocation` | `I_AllocationTableItemCategory` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ALLOCTBLITMCATTXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ALLOCTBLITMCATTXT')/$value)*

```abap
//Texts for Alloc. Tbl Item categories
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'AllocTableItemCategoryName'
@EndUserText.label: 'Item Category - Text'
@ObjectModel.dataCategory: #TEXT

@ObjectModel: {
 usageType.dataClass : #MASTER,
 usageType.serviceQuality: #A,
  usageType.sizeCategory: #S,
  

  supportedCapabilities: [  #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #EXTRACTION_DATA_SOURCE
                            ]
 }
 
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled:true


define view entity I_AllocTblItmCatTxt
  as select from t621t
  association [1..1] to I_AllocationTableItemCategory as _ItemCatAllocation on $projection.AllocTableItemCategoryName = _ItemCatAllocation.AllocTableItemCategoryName
  association [0..1] to I_Language                    as _Language          on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association:'_ItemCatAllocation'
      @ObjectModel.text.element: ['AllocTblItmCatDesc']
  key cast(apstp as  apstp preserving type ) as AllocTableItemCategoryName, //AllocTableItemCategoryName,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras                                  as Language,
      @Semantics.text: true
      apttx                                  as AllocTblItmCatDesc,
      
      //Expose Association
      _ItemCatAllocation,
      _Language
}
```
