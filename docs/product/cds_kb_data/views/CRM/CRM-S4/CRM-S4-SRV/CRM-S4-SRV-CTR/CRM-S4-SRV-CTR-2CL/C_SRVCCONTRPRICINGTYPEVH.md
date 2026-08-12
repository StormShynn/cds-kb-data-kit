---
name: C_SRVCCONTRPRICINGTYPEVH
description: "Srvccontrpricingtypevh"
app_component: CRM-S4-SRV-CTR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - consumption-view
  - value-help
  - pricing
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# C_SRVCCONTRPRICINGTYPEVH

**Srvccontrpricingtypevh**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PricingType` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #CONSUMPTION

@ObjectModel: {
  dataCategory: #VALUE_HELP,
  representativeKey: 'PricingType',
  usageType: {
    dataClass:      #META,
    serviceQuality: #A,
    sizeCategory:   #S
  },
  resultSet: {
    sizeCategory: #XS
  },
  supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
}
@EndUserText.label: 'Pricing Type of Service Contract'
@Metadata.ignorePropagatedAnnotations: true

define view entity C_SrvcContrPricingTypeVH
 as select from I_RepricingPricingType as RepricingPricingType
{
       @ObjectModel.text.association: '_Text'
  key  PricingType,
        
       _Text
}

where
     PricingType = 'B'
  or PricingType = 'C'
```
