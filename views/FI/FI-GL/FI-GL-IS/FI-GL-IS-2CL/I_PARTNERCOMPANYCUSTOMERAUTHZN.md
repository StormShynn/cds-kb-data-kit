---
name: I_PARTNERCOMPANYCUSTOMERAUTHZN
description: "Partnercompanycustomerauthzn"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - customer
  - partner
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:Customer
---
# I_PARTNERCOMPANYCUSTOMERAUTHZN

**Partnercompanycustomerauthzn**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Customer` | ✓ | |  |  |  |  |
| `PartnerCompany` |  | |  | `TradingPartner` |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Customer Authorization in Company'
@ObjectModel: { usageType.sizeCategory: #M,
                usageType.dataClass:  #MASTER,
                usageType.serviceQuality: #C,
                supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET],
                modelingPattern: #NONE }
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true

define view entity I_PartnerCompanyCustomerAuthzn as select from I_Customer as I_Customer {
  key I_Customer.Customer,
  I_Customer.TradingPartner as PartnerCompany,
  I_Customer.AuthorizationGroup
}
where I_Customer.TradingPartner <> ''
  and I_Customer.AuthorizationGroup <> ''
  and I_Customer.IsBusinessPurposeCompleted = ''
```
