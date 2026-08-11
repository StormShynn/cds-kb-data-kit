---
name: I_INSURINSRBLOBJCATEGORY
description: "Insur Policy Insurable Object Category"
app_component: FS-PM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURINSRBLOBJCATEGORY')/$value
semantic_en: "Insur Policy Insurable Object Category"
semantic_vi: "Insur Policy Insurable Object Category — CDS view cơ bản dựa trên Insur Policy Insurable Object Category."
keywords:
  - "insur"
  - "policy"
  - "insurable"
  - "object"
  - "category"
  - "plcy"
  - "insured"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-PM
  - FS-PM
  - interface-view
---
# I_INSURINSRBLOBJCATEGORY

**Insur Policy Insurable Object Category**

| Property | Value |
|---|---|
| App Component | `FS-PM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURINSRBLOBJCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InsurPlcyInsuredObjectCategory` | ✓ | |  | `objcat_id` | `NUMC(5)` | Object Category |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURINSRBLOBJCATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURINSRBLOBJCATEGORY')/$value)*

```abap
@EndUserText.label: 'Insur Policy Insurable Object Category'
@ObjectModel:{
    representativeKey: 'InsurPlcyInsuredObjectCategory',
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
  technicalName: 'IPInsrblObjCat'
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define root view entity I_InsurInsrblObjCategory
  as select from /pm0/abuoobjcat
  composition [0..*] of I_InsurInsrblObjCategoryT as _Text
{
      @Search.ranking: #HIGH
      @Search.defaultSearchElement: true
      @ObjectModel.text.association: '_Text'
  key objcat_id as InsurPlcyInsuredObjectCategory,

      _Text
}
```
