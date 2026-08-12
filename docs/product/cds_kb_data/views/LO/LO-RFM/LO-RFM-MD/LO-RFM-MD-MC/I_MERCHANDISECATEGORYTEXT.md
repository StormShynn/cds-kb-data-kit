---
name: I_MERCHANDISECATEGORYTEXT
description: "Merchandisecategorytext"
app_component: LO-RFM-MD-MC
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-RFM
  - LO-RFM-MD
  - interface-view
  - text-view
  - text
  - component:LO-RFM-MD-MC
  - lob:Logistics General
---
# I_MERCHANDISECATEGORYTEXT

**Merchandisecategorytext**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-MC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MerchandiseCategory` | ✓ | |  | `matkl` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `MerchandiseCategoryName` |  | |  | `wgbez` |  |  |
| `MerchandiseCategoryText` |  | |  | `wgbez60` |  |  |
| `ClassInternalID` |  | |  | `clint` |  |  |
| `_MerchandiseCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MerchandiseCategory` | `I_MerchandiseCategory` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@VDM: {
  viewType                          : #BASIC,
  lifecycle.contract.type           : #PUBLIC_LOCAL_API
}

@Analytics:{
  internalName                      : #LOCAL,
  dataExtraction                    : {
  enabled                           : true
} }

@AccessControl.authorizationCheck   : #CHECK
@ObjectModel: {
   representativeKey                : 'MerchandiseCategory',
   dataCategory                     : #TEXT,
   supportedCapabilities            : [ #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #EXTRACTION_DATA_SOURCE,
                                        #LANGUAGE_DEPENDENT_TEXT
                                       ], 
   modelingPattern                  :  #LANGUAGE_DEPENDENT_TEXT,                                                            
   usageType                        : {serviceQuality: #A,sizeCategory: #M,dataClass: #MASTER }
 }
@Metadata :{
   ignorePropagatedAnnotations      : true
}
@ObjectModel.sapObjectNodeType.name : 'MerchandiseCategoryText'
@EndUserText.label                  : 'Merchandise Category - Text'

define view entity I_MerchandiseCategoryText
  as select from t023t as MerchandiseCategoryText
    inner join   klah  as MrchdsCategory on  MerchandiseCategoryText.matkl = MrchdsCategory.class
                                         and MrchdsCategory.wwskz          = '1'
                                         
  association [1..1] to I_MerchandiseCategory as _MerchandiseCategory on $projection.MerchandiseCategory = _MerchandiseCategory.MerchandiseCategory
  association [0..1] to I_Language            as _Language            on $projection.Language            = _Language.Language

{
      @ObjectModel.foreignKey.association: '_MerchandiseCategory'
  key MerchandiseCategoryText.matkl   as MerchandiseCategory,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key MerchandiseCategoryText.spras   as Language,
      @Semantics.text: true
      MerchandiseCategoryText.wgbez   as MerchandiseCategoryName,
      @Semantics.text: true
      MerchandiseCategoryText.wgbez60 as MerchandiseCategoryText,
      MrchdsCategory.clint            as ClassInternalID,
      /* Associations */
      _MerchandiseCategory,
      _Language
}
```
