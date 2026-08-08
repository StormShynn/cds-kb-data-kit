---
name: I_TRANSPPURGORG
description: "Transppurgorg"
app_component: TM-MD-ORG-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-MD
  - TM-MD-ORG
  - interface-view
  - component:TM-MD-ORG-2CL
  - lob:Other
---
# I_TRANSPPURGORG

**Transppurgorg**

| Property | Value |
|---|---|
| App Component | `TM-MD-ORG-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspPurgOrg` | ✓ | |  | `cast( PurchasingOrganization as /scmtms/purch_org preserving type )` |  |  |
| `TranspPurgOrgName` |  | |  | `cast( PurchasingOrganizationName as /scmtms/purch_org_name preserving type )` |  |  |
| `CompanyCode` |  | |  | `cast( CompanyCode as /scmtms/purch_company_code preserving type )` |  |  |
| `ConfigDeprecationCode` |  | |  |  |  |  |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Purchasing Organization'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #ORGANIZATIONAL
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view entity I_TranspPurgOrg
  as select from I_PurchasingOrganization
  association [0..1] to I_CompanyCode as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode 
{
  key cast( PurchasingOrganization as /scmtms/purch_org preserving type )          as TranspPurgOrg,
      cast( PurchasingOrganizationName as /scmtms/purch_org_name preserving type ) as TranspPurgOrgName,
      cast( CompanyCode as /scmtms/purch_company_code preserving type )            as CompanyCode,
      ConfigDeprecationCode,
      _CompanyCode
}
```
