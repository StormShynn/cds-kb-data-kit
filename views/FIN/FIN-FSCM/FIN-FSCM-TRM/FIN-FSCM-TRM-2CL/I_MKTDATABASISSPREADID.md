---
name: I_MKTDATABASISSPREADID
description: Mktdatabasisspreadid
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_MKTDATABASISSPREADID

**Mktdatabasisspreadid**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `MktDataBasisSpreadID` | ✓ | |  | `cast( BasisSpreadID.bsprd_id as ftr_mdm_mkt_data_bsprd_id preserving type )` |
| `TextDescription` |  | |  | `text_long` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMDBASSPR'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #CUSTOMIZING
@Analytics.internalName:#LOCAL 
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey:true 
@Analytics : {dataCategory: #DIMENSION, dataExtraction.enabled : true}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@ObjectModel.representativeKey: 'MktDataBasisSpreadID'
@EndUserText.label: 'Market Data Basis Spread ID'
@ObjectModel.sapObjectNodeType.name: 'BasisSpread'
define view I_MktDataBasisSpreadID as select from tyc_bsprd_def as BasisSpreadID {
   @ObjectModel.text.element: 'TextDescription'
   @EndUserText.label: 'Basis Spread ID'
   key cast( BasisSpreadID.bsprd_id as ftr_mdm_mkt_data_bsprd_id preserving type ) as MktDataBasisSpreadID,
   
   @Semantics.text
   @EndUserText.label: 'TextDescription'
   BasisSpreadID.text_long as TextDescription

}
```
