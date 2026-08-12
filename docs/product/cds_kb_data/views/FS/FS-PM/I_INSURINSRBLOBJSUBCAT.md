---
name: I_INSURINSRBLOBJSUBCAT
description: "Insur Plcy Insurable Object Sub Category"
app_component: FS-PM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURINSRBLOBJSUBCAT')/$value
semantic_en: "Insur Plcy Insurable Object Sub Category"
semantic_vi: "Insur Plcy Insurable Object Sub Category — CDS view cơ bản dựa trên Insur Plcy Insurable Object Sub Category."
keywords:
  - "insur"
  - "plcy"
  - "insurable"
  - "object"
  - "sub"
  - "category"
  - "insrd"
  - "insured"
tags:
  - FS
  - component:FS-PM
  - FS-PM
  - interface-view
---
# I_INSURINSRBLOBJSUBCAT

**Insur Plcy Insurable Object Sub Category**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURINSRBLOBJSUBCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InsurPlcyInsrdObjSubCategory` | ✓ | |  | `objtyp_id` | `NUMC(5)` | Object Type |
| `InsurPlcyInsuredObjectCategory` |  | |  | `objcat_id` | `NUMC(5)` | Object Category |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURINSRBLOBJSUBCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURINSRBLOBJSUBCAT')/$value)*

```abap
@EndUserText.label: 'Insur Plcy Insurable Object Sub Category'
@ObjectModel:{
    representativeKey: 'InsurPlcyInsrdObjSubCategory',
    usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
    },
    modelingPattern: #ANALYTICAL_DIMENSION,
    resultSet.sizeCategory: #XS,
    supportedCapabilities: [#ANALYTICAL_DIMENSION,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #CDS_MODELING_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #SEARCHABLE_ENTITY,
                            #SQL_DATA_SOURCE,
                            #VALUE_HELP_PROVIDER]
}
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck:#NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL,
  technicalName: 'IPInsrblObjSubCat'
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define root view entity I_InsurInsrblObjSubCat
  as select from /pm0/abuoobjtyp
  composition [0..*] of I_InsurInsrblObjSubCatT as _Text
{
      @Search.ranking: #HIGH
      @Search.defaultSearchElement: true
      @ObjectModel.text.association: '_Text'
  key objtyp_id as InsurPlcyInsrdObjSubCategory,
      objcat_id as InsurPlcyInsuredObjectCategory,

      _Text
}
```
