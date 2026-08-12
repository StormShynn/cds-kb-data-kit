---
name: I_INSURINSRBLOBJCATEGORYT
description: "Insur Plcy Insrd Object Category - Txt"
app_component: FS-PM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURINSRBLOBJCATEGORYT')/$value
semantic_en: "Insur Plcy Insrd Object Category - Txt"
semantic_vi: "Insur Plcy Insrd Object Category - Txt — CDS view cơ bản dựa trên Insur Plcy Insrd Object Category - Txt."
keywords:
  - "insur"
  - "plcy"
  - "insrd"
  - "object"
  - "category"
  - "txt"
  - "language"
  - "insured"
  - "name"
tags:
  - FS
  - component:FS-PM
  - FS-PM
  - interface-view
---
# I_INSURINSRBLOBJCATEGORYT

**Insur Plcy Insrd Object Category - Txt**

| Property | Value |
|---|---|
| App Component | `FS-PM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURINSRBLOBJCATEGORYT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `InsurPlcyInsuredObjectCategory` | ✓ | |  | `objcat_id` | `NUMC(5)` | Object Category |
| `InsurPlcyInsrdObjCategoryName` |  | |  | `objcat_tt` | `CHAR(50)` | Object Category Name |
| `_Language` | | ✓ | | | | |
| `_InsurInsrblObjCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURINSRBLOBJCATEGORYT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURINSRBLOBJCATEGORYT')/$value)*

```abap
@EndUserText.label: 'Insur Plcy Insrd Object Category - Txt'
@ObjectModel:{
    representativeKey: 'InsurPlcyInsuredObjectCategory',
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

define view entity I_InsurInsrblObjCategoryT
  as select from /pm0/abuoobjcatt
  association        to parent I_InsurInsrblObjCategory as _InsurInsrblObjCategory on $projection.InsurPlcyInsuredObjectCategory = _InsurInsrblObjCategory.InsurPlcyInsuredObjectCategory
  association [0..1] to I_Language                      as _Language               on $projection.Language = _Language.Language

{

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu     as Language,
      @ObjectModel.foreignKey.association: '_InsurInsrblObjCategory'
      @ObjectModel.text.element: ['InsurPlcyInsrdObjCategoryName']
  key objcat_id as InsurPlcyInsuredObjectCategory,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      objcat_tt as InsurPlcyInsrdObjCategoryName,

      //Associations
      _InsurInsrblObjCategory,
      _Language

}
```
