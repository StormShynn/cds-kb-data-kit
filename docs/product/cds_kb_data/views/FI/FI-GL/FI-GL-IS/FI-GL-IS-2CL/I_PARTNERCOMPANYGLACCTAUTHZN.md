---
name: I_PARTNERCOMPANYGLACCTAUTHZN
description: "Partnercompanyglacctauthzn"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - partner
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_PARTNERCOMPANYGLACCTAUTHZN

**Partnercompanyglacctauthzn**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PartnerCompany` | ✓ | |  |  |  |  |
| `GLAccount` | ✓ | |  | `cast ( 'F_BKPF_BES' as fis_racct preserving type )` |  |  |
| `AuthorizationGroup` | ✓ | |  |  |  |  |
| `AuthorizationObject` |  | |  | `'F_BKPF_BES'` |  |  |

## Source Code

```abap
/*
ATTENTION - this view does not return GL Account! It was adjusted to solve performance problems with the DCL.
To keep stable the field GLAccount is used to provide the new key vvalues for the authorization object to be used in the DCL.
Do not reuse this view for any other purpose. 
*/

@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'G/L Account Authorization in Company'
@ObjectModel: { usageType.sizeCategory: #M,
                usageType.dataClass:  #MASTER,
                usageType.serviceQuality: #C,
                supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET],
                modelingPattern: #NONE }
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations: true

define view entity I_PartnerCompanyGLAcctAuthzn as select distinct from P_PartnerCompanyGLAcctAuthzn as P_PartnerCompanyGLAcctAuthzn
{
  key P_PartnerCompanyGLAcctAuthzn.PartnerCompany,
  key cast ( 'F_BKPF_BES' as fis_racct preserving type ) as GLAccount,
  key P_PartnerCompanyGLAcctAuthzn.AuthorizationGroup,
  @EndUserText.label: 'Authorization Object'
  'F_BKPF_BES' as AuthorizationObject
  }
  union all select distinct from I_PartnerCompanyCustomerAuthzn as I_PartnerCompanyCustomerAuthzn
  {
  key I_PartnerCompanyCustomerAuthzn.PartnerCompany,
  key cast ( 'F_BKPF_BED' as fis_racct preserving type ) as GLAccount,
  key I_PartnerCompanyCustomerAuthzn.AuthorizationGroup,
  'F_BKPF_BED' as AuthorizationObject
  }
  union all select distinct from I_PartnerCompanySupplierAuthzn as I_PartnerCompanySupplierAuthzn
  {
  key I_PartnerCompanySupplierAuthzn.PartnerCompany,
  key cast ( 'F_BKPF_BEK' as fis_racct preserving type ) as GLAccount,
  key I_PartnerCompanySupplierAuthzn.AuthorizationGroup,
  'F_BKPF_BEK' as AuthorizationObject
}
```
