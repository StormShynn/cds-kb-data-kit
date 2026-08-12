---
name: I_RFQLIFECYCLESTATUS
description: "Rfqlifecyclestatus"
app_component: MM-PUR-RFQ-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-RFQ
  - interface-view
  - status
  - component:MM-PUR-RFQ-2CL
  - lob:Sourcing & Procurement
---
# I_RFQLIFECYCLESTATUS

**Rfqlifecyclestatus**

| Property | Value |
|---|---|
| App Component | `MM-PUR-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RFQLifecycleStatus` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as vdm_rfq_lfst_cd )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_RFQLifecycleStatusText` | [0..*] |

## Source Code

```abap
@ObjectModel:{representativeKey: 'RFQLifecycleStatus',
              usageType.dataClass: #MASTER,
              usageType.serviceQuality: #A,
              usageType.sizeCategory: #S}

@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'RFQ Lifecycle Status'
@Analytics.dataCategory:#DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'IRFQLIFESTS'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: #NONE

define view I_RFQLifecycleStatus
  as select from dd07l
  association [0..*] to I_RFQLifecycleStatusText as _Text on $projection.RFQLifecycleStatus = _Text.RFQLifecycleStatus
{
      @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 2 ) as vdm_rfq_lfst_cd ) as RFQLifecycleStatus,
      _Text
}
where
      domname  = 'VDM_RFQ_LFST_CD'
  and as4local = 'A'
```
