---
name: I_SERVICEDOCITEMCATEGORYTEXT
description: Service DocumentITEMCATEGORYTEXT
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - text-view
  - service
  - text
  - item-level
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCITEMCATEGORYTEXT

**Service DocumentITEMCATEGORYTEXT**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceDocItemCategory` | `itm_type` |
| key `Language` | `langu` |
| `ServiceDocItemCategoryName` | `i_description` |
| `SrvcDocItmCategoryShortName` | `i_description_20` |
| `_ServiceDocItemCategory` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocItemCategory` | `I_ServiceDocItemCategory` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Category of Service Transac Item - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE

@AbapCatalog:{
  sqlViewName: 'ISERVDOCITMCATXT',
  compiler.compareFilter: true ,
  preserveKey: true
}

@AccessControl.authorizationCheck: #NOT_REQUIRED

@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
   dataCategory: #TEXT,
   representativeKey: 'ServiceDocItemCategory',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #X,
     sizeCategory:   #S
   },
   supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE],
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}

@Analytics: {
//    dataCategory: #TEXT,
    dataExtraction: {
        enabled: true}
        }
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true


define view I_ServiceDocItemCategoryText
  as select from crmc_item_type_t
  association [1..1] to I_ServiceDocItemCategory as _ServiceDocItemCategory on $projection.ServiceDocItemCategory = _ServiceDocItemCategory.ServiceDocItemCategory
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{

      @ObjectModel.foreignKey.association: '_ServiceDocItemCategory'
  key itm_type         as ServiceDocItemCategory,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu            as Language,

      @Semantics.text: true
      i_description    as ServiceDocItemCategoryName,

      @Semantics.text: true
      i_description_20 as SrvcDocItmCategoryShortName,

      _ServiceDocItemCategory,
      _Language

}
```
