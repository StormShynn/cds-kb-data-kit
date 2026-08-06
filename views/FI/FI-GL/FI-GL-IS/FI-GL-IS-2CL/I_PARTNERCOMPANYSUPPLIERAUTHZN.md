---
name: I_PARTNERCOMPANYSUPPLIERAUTHZN
description: Partnercompanysupplierauthzn
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
  - supplier
  - partner
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:Supplier
---
# I_PARTNERCOMPANYSUPPLIERAUTHZN

**Partnercompanysupplierauthzn**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Supplier` | `I_Supplier.Supplier` |
| `PartnerCompany` | `I_Supplier.TradingPartner` |
| `AuthorizationGroup` | `I_Supplier.AuthorizationGroup` |

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Supplier Authorization in Company'
@ObjectModel: { usageType.sizeCategory: #M,
                usageType.dataClass:  #MASTER,
                usageType.serviceQuality: #C,
                supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET],
                modelingPattern: #NONE }
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true

define view entity I_PartnerCompanySupplierAuthzn as select from I_Supplier as I_Supplier {
  key I_Supplier.Supplier,
  I_Supplier.TradingPartner as PartnerCompany,
  I_Supplier.AuthorizationGroup
}
where I_Supplier.TradingPartner <> ''
  and I_Supplier.AuthorizationGroup <> ''
  and I_Supplier.IsBusinessPurposeCompleted = ''
```
