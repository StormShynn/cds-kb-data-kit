---
name: I_INSURINSRBLOBJSUBCAT
description: "Insur Plcy Insurable Object Sub Category"
app_component: FS-PM
software_component: SAPSCORE
release_state: released
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
