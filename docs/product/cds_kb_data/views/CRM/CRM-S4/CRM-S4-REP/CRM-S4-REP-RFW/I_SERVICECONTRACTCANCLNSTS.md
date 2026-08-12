---
name: I_SERVICECONTRACTCANCLNSTS
description: "Servicecontractcanclnsts"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - service
  - contract
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICECONTRACTCANCLNSTS

**Servicecontractcanclnsts**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceContractCanclnSts` | ✓ | |  | `domvalue_l` |  |  |
| `_ServiceContractCanclnStsTxt` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceContractCanclnStsTxt` | `I_ServiceContractCanclnStsTxt` | [1..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISRVCCNTCANCSTS'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S
    },
    representativeKey: 'ServiceContractCanclnSts',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                            #CDS_MODELING_ASSOCIATION_TARGET, 
                            #SQL_DATA_SOURCE, 
                            #CDS_MODELING_DATA_SOURCE]
}

@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Service Contract Cancellation Status'
define view I_ServiceContractCanclnSts
  as select from dd07l
  association [1..*] to I_ServiceContractCanclnStsTxt as _ServiceContractCanclnStsTxt on $projection.ServiceContractCanclnSts = _ServiceContractCanclnStsTxt.ServiceContractCanclnSts
{

      @ObjectModel.text.association: '_ServiceContractCanclnStsTxt'
  key domvalue_l as ServiceContractCanclnSts,

      _ServiceContractCanclnStsTxt
}
where
      domname  = 'CRMS4_STAT_CONTRACT_CANCELLED'
  and as4local = 'A'
```
