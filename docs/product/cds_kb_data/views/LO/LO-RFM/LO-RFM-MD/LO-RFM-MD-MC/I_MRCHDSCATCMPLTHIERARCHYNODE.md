---
name: I_MRCHDSCATCMPLTHIERARCHYNODE
description: "Mrchdscatcmplthierarchynode"
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
  - component:LO-RFM-MD-MC
  - lob:Logistics General
---
# I_MRCHDSCATCMPLTHIERARCHYNODE

**Mrchdscatcmplthierarchynode**

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
| `['ParentMrchdsCatCmpltHierNode']` |  | |  | `parent: ['ParentMrchdsCatCmpltHierNode']` |  |  |
| `['MrchdsCatCmpltHierNode']` |  | |  | `child : ['MrchdsCatCmpltHierNode']` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName             : 'IMCHIERCMPLTNDE'
@AbapCatalog.viewEnhancementCategory : [#NONE]
@AbapCatalog.compiler.compareFilter  : true
@ClientHandling.algorithm            : #SESSION_VARIABLE

@VDM: {
  viewType                           : #BASIC,
  lifecycle.contract.type            : #PUBLIC_LOCAL_API
}

@Analytics:{
  internalName                       : #LOCAL,
  dataExtraction                     : {
  enabled                            : true
    }
}

@AccessControl.authorizationCheck   : #MANDATORY
@ObjectModel: {
   representativeKey                : 'MrchdsCatCmpltHierNode',
   dataCategory                     :  #HIERARCHY,
   supportedCapabilities            : [ #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #EXTRACTION_DATA_SOURCE ,
                                        #ANALYTICAL_DIMENSION
                                        ],
   modelingPattern                  :  #ANALYTICAL_DIMENSION ,
   usageType                        : {serviceQuality: #A,sizeCategory: #L,dataClass: #MASTER }
 }
@Metadata :{
   ignorePropagatedAnnotations      : true
}
@Hierarchy.parentChild              : [ { name                  : 'MrchdsCatCmpltHierarchyNode',
                                          label                 : 'MrchdsCatCmpltHierarchyNode',
                                          recurse               :  { parent: ['ParentMrchdsCatCmpltHierNode'], 
                                                                     child : ['MrchdsCatCmpltHierNode'] },
                                          siblingsOrder         : [{by: 'MrchdsCatCmpltHierNode', direction:#ASC}] ,
                                          orphanedNode.handling : #ROOT_NODES }]
@ObjectModel.sapObjectNodeType.name : 'MrchdsCategoryHierarchyNode'                                          
@EndUserText.label                  : 'Merchandise Category Complete HierNode'  
                        
define view I_MrchdsCatCmpltHierarchyNode
  as select from           klah as Class
    left outer to one join kssk as ObjectToClass on Class.clint         = ObjectToClass.objek
    left outer to one join klah as ParentClass   on ObjectToClass.clint = ParentClass.clint
    
  association [0..1] to I_MerchandiseCategory         as _MerchandiseCategory         on  $projection.MerchandiseCategory         = _MerchandiseCategory.MerchandiseCategory
                                                                                      and $projection.MrchdsCategoryHierarchyNode = ''
  association [0..1] to I_MrchdsCategoryHierarchyNode as _MrchdsCategoryHierarchyNode on  $projection.MrchdsCategoryHierarchyNode = _MrchdsCategoryHierarchyNode.MrchdsCategoryHierarchyNode
{
  key Class.class                                                                                               as MrchdsCatCmpltHierNode,
      ParentClass.class                                                                                         as ParentMrchdsCatCmpltHierNode,
      @ObjectModel.foreignKey.association: '_MerchandiseCategory'
      case when Class.wwskz = '1' then cast ( Class.class as rfm_mrchdscategory ) else '' end                   as MerchandiseCategory,
      @ObjectModel.foreignKey.association: '_MrchdsCategoryHierarchyNode'
      case when Class.wwskz = '0' then cast ( Class.class as rfm_mrchdcathiernode preserving type ) else '' end as MrchdsCategoryHierarchyNode,
      _MerchandiseCategory,
      _MrchdsCategoryHierarchyNode
}
where
       Class.klart = '026'
  and(
       Class.wwskz = '0'
    or Class.wwskz = '1'
  )
```
