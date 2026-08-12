---
name: I_GTEEMBDGTVALIDITYNUMBER
description: "Grantee Management Budget Validity Number"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMBDGTVALIDITYNUMBER')/$value
semantic_en: "Grantee Management Budget Validity Number"
semantic_vi: "Grantee Management Budget Validity Number — CDS view giao diện (master data) dựa trên gmbdgtvalidity."
keywords:
  - "grantee"
  - "management"
  - "budget"
  - "validity"
  - "number"
  - "grant"
  - "gtee"
  - "mgmt"
  - "bdgt"
  - "phase"
  - "status"
  - "strt"
tags:
  - PSM
  - budget
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
---
# I_GTEEMBDGTVALIDITYNUMBER

**Grantee Management Budget Validity Number**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMBDGTVALIDITYNUMBER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` | ✓ | |  | `grant_nbr` | `CHAR(20)` | Grant |
| `GteeMBudgetValidityNumber` | ✓ | |  | `bdgt_vldty_nbr` | `CHAR(3)` | Budget Validity Number |
| `GranteeMgmtBdgtPhase` | ✓ | |  | `bdgt_phase` | `CHAR(1)` | Budget Phase |
| `GranteeMgmtBudgetStatus` | ✓ | |  | `release_status` | `CHAR(1)` | Budget Status: Unreleased/Released |
| `GteeMBdgtValidityNumberStrtDte` |  | |  | `cast( Ts.from_date as gmis_bdgt_vldty_nbr_start_date preserving type )` | `DATS(8)` | Start Date of Budget Validity Number |
| `GteeMBdgtValidityNumberEndDate` |  | |  | `cast( Ts.to_date as gmis_bdgt_vldty_nbr_end_date preserving type )` | `DATS(8)` | End Date of Budget Validity Number |
| `GrantFiscalYear` |  | |  | `cast( Ts.sponsor_fy as gmis_grant_fy preserving type )` | `NUMC(4)` | Fiscal Year of Sponsor (is Grant Fiscal Year) |
| `GranteeFiscalYear` |  | |  | `cast( Ts.grantee_fy as gm_grantee_fy preserving type)` | `NUMC(4)` | Fiscal Year for Grantee Organization |
| `_Grant` | | ✓ | | | | |
| `_GranteeMgmtBdgtPhase` | | ✓ | | | | |
| `_GranteeMgmtBudgetStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Grant` | `I_Grant` | [0..1] |
| `_GranteeMgmtBdgtPhase` | `I_GranteeMgmtBdgtPhase` | [0..1] |
| `_GranteeMgmtBudgetStatus` | `I_GranteeMgmtBudgetStatus` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMBDGTVALIDITYNUMBER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMBDGTVALIDITYNUMBER')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IGMBDGTVLDTYNR'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Grantee Management Budget Validity Number'

@VDM.viewType: #BASIC
@Analytics: {
     dataCategory: #DIMENSION,
     dataExtraction.enabled: true,
     internalName: #LOCAL
}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
     sapObjectNodeType.name: 'GteeMBudgetValidityNumber',
     representativeKey: 'GteeMBudgetValidityNumber',
     usageType: {
         dataClass: #MASTER,
         serviceQuality: #C,
         sizeCategory: #M
     },
     supportedCapabilities: [ #ANALYTICAL_DIMENSION ]
}
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

define view I_GteeMBdgtValidityNumber
  as select from gmbdgtvalidity as Ts
  association [0..1] to I_Grant                   as _Grant                   on $projection.GrantID = _Grant.GrantID
  association [0..1] to I_GranteeMgmtBdgtPhase    as _GranteeMgmtBdgtPhase    on $projection.GranteeMgmtBdgtPhase = _GranteeMgmtBdgtPhase.GranteeMgmtBdgtPhase
  association [0..1] to I_GranteeMgmtBudgetStatus as _GranteeMgmtBudgetStatus on $projection.GranteeMgmtBudgetStatus = _GranteeMgmtBudgetStatus.GranteeMgmtBudgetStatus
{
//      Value help definition for informational purpose
//      @Consumption.valueHelpDefinition: [
//        { entity:  { name:    'I_GrantStdVH',
//                     element: 'GrantID' }
//        }]
      @ObjectModel.foreignKey.association: '_Grant'
  key Ts.grant_nbr                                                           as GrantID,
//      Value help definition for informational purpose
//      @Consumption.valueHelpDefinition: [
//        { entity:  { name:    'I_GteeMBdgtValidityNumberStdVH',
//                     element: 'GteeMBudgetValidityNumber' }
//        }]
  key Ts.bdgt_vldty_nbr                                                      as GteeMBudgetValidityNumber,
      @ObjectModel.foreignKey.association: '_GranteeMgmtBdgtPhase'
  key Ts.bdgt_phase                                                          as GranteeMgmtBdgtPhase,
      @ObjectModel.foreignKey.association: '_GranteeMgmtBudgetStatus'
  key Ts.release_status                                                      as GranteeMgmtBudgetStatus,
      @Semantics.businessDate.from: true
      cast( Ts.from_date as gmis_bdgt_vldty_nbr_start_date preserving type ) as GteeMBdgtValidityNumberStrtDte,
      @Semantics.businessDate.to: true
      cast( Ts.to_date as gmis_bdgt_vldty_nbr_end_date preserving type )     as GteeMBdgtValidityNumberEndDate,
      cast( Ts.sponsor_fy as gmis_grant_fy preserving type )                 as GrantFiscalYear,
      cast( Ts.grantee_fy as gm_grantee_fy preserving type)                  as GranteeFiscalYear,
      // Ts.block
      _GranteeMgmtBdgtPhase,
      _GranteeMgmtBudgetStatus,
      _Grant
}
```
