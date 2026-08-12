---
name: I_GLACCOUNTAUTHZNINCOMPANY
description: "GL AccountAUTHZNINCOMPANY"
app_component: FI-GL-GL-N-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - gl-account
  - component:FI-GL-GL-N-2CL
  - lob:Finance
---
# I_GLACCOUNTAUTHZNINCOMPANY

**GL AccountAUTHZNINCOMPANY**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PartnerCompany` | ✓ | |  |  |  |  |
| `GLAccount` | ✓ | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'G/L Account Authorization in Company'

@ObjectModel: { usageType.sizeCategory: #M,
                usageType.dataClass:  #MASTER,
                usageType.serviceQuality: #C,
                supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET],
                modelingPattern: #NONE }
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true

define view entity I_GLAccountAuthznInCompany as select from P_GLAccountInCompany as P_GLAccountInCompany
{
 
key P_GLAccountInCompany.PartnerCompany, 
key P_GLAccountInCompany.GLAccount, 
P_GLAccountInCompany.AuthorizationGroup
    
}
```
