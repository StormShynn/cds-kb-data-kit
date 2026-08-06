---
name: I_CAREVNACCTGSERVICETYPE
description: Carevnacctgservicetype
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - service
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAREVNACCTGSERVICETYPE

**Carevnacctgservicetype**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CARevenueAccountingServiceType` | `service_type` |
| `_CARevnAcctgServiceTypeText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CARevnAcctgServiceTypeText` | `I_CARevnAcctgServiceTypeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Revenue Accounting Service Type'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CARevenueAccountingServiceType',
                sapObjectNodeType.name: 'ContrAcctgRevnAcctgServiceType',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CARevnAcctgServiceType
  as select from tfk_ra_servtyp

  association [0..*] to I_CARevnAcctgServiceTypeText as _CARevnAcctgServiceTypeText on $projection.CARevenueAccountingServiceType = _CARevnAcctgServiceTypeText.CARevenueAccountingServiceType

{
      @ObjectModel.text.association: '_CARevnAcctgServiceTypeText'
  key service_type as CARevenueAccountingServiceType,

      _CARevnAcctgServiceTypeText
}
```
