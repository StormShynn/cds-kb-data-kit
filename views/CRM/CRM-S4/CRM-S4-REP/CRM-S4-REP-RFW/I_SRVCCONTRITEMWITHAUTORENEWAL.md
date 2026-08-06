---
name: I_SRVCCONTRITEMWITHAUTORENEWAL
description: Srvccontritemwithautorenewal
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - item-level
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCCONTRITEMWITHAUTORENEWAL

**Srvccontritemwithautorenewal**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceContract` | `ServiceContract` |
| key `ServiceContractItem` | `ServiceContractItem` |
| `ServiceObjectType` | `ServiceObjectType` |
| `ServiceContractItemDescription` | `ServiceContractItemDescription` |
| `ServiceDocumentType` | `ServiceDocumentType` |
| `RespEmployeeBusinessPartnerId` | `RespEmployeeBusinessPartnerId` |
| `SalesOrganization` | `SalesOrganization` |
| `DistributionChannel` | `DistributionChannel` |
| `Division` | `Division` |
| `SalesOffice` | `SalesOffice` |
| `SalesGroup` | `SalesGroup` |
| `_ServiceContractItemEnhcd` | *Association* |
| `_ServiceContract` | *Association* |
| `_ServiceObjType` | *Association* |
| `_ServiceDocumentType` | *Association* |
| `_RespEmployee` | *Association* |
| `_DistributionChannel` | *Association* |
| `_Division` | *Association* |
| `_SalesOrganization` | *Association* |
| `_SalesOffice` | *Association* |
| `_SalesGroup` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceContractItemEnhcd` | `I_ServiceContractItemEnhcd` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Service Contract Items with Automatic Renewal'

@AccessControl: {
    authorizationCheck: #MANDATORY,
    personalData.blocking: #NOT_REQUIRED
}

@Analytics.technicalName: 'ISrvcContrItemWAutoRenewal'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    modelingPattern: #ANALYTICAL_DIMENSION,
    representativeKey: 'ServiceContractItem',
    sapObjectNodeType.name: 'ServiceContractItem',
    supportedCapabilities: [ #ANALYTICAL_DIMENSION, 
                             #CDS_MODELING_ASSOCIATION_TARGET, 
                             #SQL_DATA_SOURCE, 
                             #CDS_MODELING_DATA_SOURCE ],
    usageType: {
        serviceQuality: #A,
        sizeCategory:   #XL,
        dataClass:      #TRANSACTIONAL
    }
}

@VDM: {
    viewType:#COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}  

define view entity I_SrvcContrItemWithAutoRenewal with parameters P_KeyDate : vdm_v_key_date
as select from I_ServiceContractItem
  association [1..1] to I_ServiceContractItemEnhcd as _ServiceContractItemEnhcd on _ServiceContractItemEnhcd.ServiceContract     = $projection.ServiceContract
                                                                               and _ServiceContractItemEnhcd.ServiceContractItem = $projection.ServiceContractItem
{
      @ObjectModel.foreignKey.association: '_ServiceContract'
  key ServiceContract,
      @ObjectModel.text.element: [ 'ServiceContractItemDescription' ]
  key ServiceContractItem,
      @ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceObjectType,
      @Semantics.text: true
      ServiceContractItemDescription,
      
      ServiceDocumentType,
      RespEmployeeBusinessPartnerId,
      SalesOrganization,
      DistributionChannel,
      Division,
      SalesOffice,
      SalesGroup,
      
      _ServiceContractItemEnhcd,
      _ServiceContract,
      _ServiceObjType,
      _ServiceDocumentType,
      _RespEmployee,
      _DistributionChannel,
      _Division,
      _SalesOrganization,
      _SalesOffice,
      _SalesGroup
} where ServiceDocumentItemObjectType = 'BUS2000137'
    and ServiceContractItemIsReleased = 'X'
    and ServiceContrItemEndDateTime >= dats_tims_to_tstmp($session.system_date,
                                                          cast('000000' as tims ),
                                                          abap_user_timezone( $session.user,
                                                                              $session.client,
                                                                              'NULL' ),
                                                          $session.client,
                                                          'NULL' ) 
    and SrvcContrItemRnwlDuration > 0
    and SrvcContrItemRnwlDurationUnit != ''
    and SrvcContrItemExtensionDuration > 0
    and SrvcContrItemExtnDurationUnit != ''
    and SrvcContrItemRenewalDateTime > 0
    and SrvcContrItemRenewalDateTime < dats_tims_to_tstmp($parameters.P_KeyDate,
                                                          cast('000000' as tims ),
                                                          abap_user_timezone( $session.user,
                                                                              $session.client, 
                                                                              'NULL' ),
                                                          $session.client,
                                                          'NULL' )
```
