---
name: I_REINTEGOBJECTINTCONTRSETUP
description: Reintegobjectintcontrsetup
app_component: RE-FX-IP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-IP
  - interface-view
  - component:RE-FX-IP-2CL
  - lob:Other
---
# I_REINTEGOBJECTINTCONTRSETUP

**Reintegobjectintcontrsetup**

| Property | Value |
|---|---|
| App Component | `RE-FX-IP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REContractType` | ✓ | |  | `contracttype` |  |  |
| `ContractStartDate` |  | |  | `contractstartdate` |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Integration Object Internal Contr Setup'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}
@VDM.viewType: #BASIC
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
//                                        #ANALYTICAL_PROVIDER,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE
//                                        #SEARCHABLE_ENTITY      
                                        ]
@ObjectModel.representativeKey: 'REContractType'                                        
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
define view entity I_REIntegObjectIntContrSetup
  as select from tivipiointcn
{
       //  key dummykey          as Dummykey,
  key  contracttype      as REContractType,
       contractstartdate as ContractStartDate
}
```
