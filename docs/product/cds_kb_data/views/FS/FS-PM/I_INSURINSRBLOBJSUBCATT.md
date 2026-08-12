---
name: I_INSURINSRBLOBJSUBCATT
description: "Insur Plcy Insrbl Obj Sub Category - Txt"
app_component: FS-PM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURINSRBLOBJSUBCATT')/$value
semantic_en: "Insur Plcy Insrbl Obj Sub Category - Txt"
semantic_vi: "Insur Plcy Insrbl Obj Sub Category - Txt — CDS view cơ bản dựa trên Insur Plcy Insrbl Obj Sub Category - Txt."
keywords:
  - "insur"
  - "plcy"
  - "insrbl"
  - "obj"
  - "sub"
  - "category"
  - "txt"
  - "language"
  - "insrd"
  - "name"
tags:
  - FS
  - component:FS-PM
  - FS-PM
  - interface-view
---
# I_INSURINSRBLOBJSUBCATT

**Insur Plcy Insrbl Obj Sub Category - Txt**

| Property | Value |
|---|---|
| App Component | `FS-PM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURINSRBLOBJSUBCATT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `InsurPlcyInsrdObjSubCategory` | ✓ | |  | `objtyp_id` | `NUMC(5)` | Object Type |
| `InsurPlcyInsrdObjSubCatName` |  | |  | `objtyp_tt` | `CHAR(50)` | Name of Object Type |
| `_Language` | | ✓ | | | | |
| `_InsurInsrblObjSubCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURINSRBLOBJSUBCATT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURINSRBLOBJSUBCATT')/$value)*

```abap
@EndUserText.label: 'Insur Plcy Insrbl Obj Sub Category - Txt'
@ObjectModel:{
    representativeKey: 'InsurPlcyInsrdObjSubCategory',
    dataCategory: #TEXT,
    usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
    },
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [
                            #LANGUAGE_DEPENDENT_TEXT,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #SEARCHABLE_ENTITY
                           ]
}
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}
@Search.searchable: true
@AccessControl.authorizationCheck:#NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true

define view entity I_InsurInsrblObjSubCatT
  as select from /pm0/abuoobjtypt
  association        to parent I_InsurInsrblObjSubCat as _InsurInsrblObjSubCat on $projection.InsurPlcyInsrdObjSubCategory = _InsurInsrblObjSubCat.InsurPlcyInsrdObjSubCategory
  association [0..1] to I_Language                    as _Language             on $projection.Language = _Language.Language

{

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu     as Language,
      @ObjectModel.foreignKey.association: '_InsurInsrblObjSubCat'
      @ObjectModel.text.element: ['InsurPlcyInsrdObjSubCatName']
  key objtyp_id as InsurPlcyInsrdObjSubCategory,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      objtyp_tt as InsurPlcyInsrdObjSubCatName,

      //Associations
      _InsurInsrblObjSubCat,
      _Language

}
```
