---
name: I_PROJSRVCORG
description: "Projsrvcorg"
app_component: PPM-SCL-STR
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
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - interface-view
  - component:PPM-SCL-STR
  - lob:Other
---
# I_PROJSRVCORG

**Projsrvcorg**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
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
| `ProjectServiceOrganizationUUID` | ✓ | |  |  |  |  |
| `ProjectServiceOrganization` |  | |  |  |  |  |
| `ProjectServiceOrganizationOID` |  | |  |  |  |  |
| `ProjSrvcOrgIsTimePostingAllwd` |  | |  |  |  |  |
| `ProjSrvcOrgIsProjDeliveryOrg` |  | |  |  |  |  |
| `ProjSrvcOrgIsResourceOrg` |  | |  |  |  |  |
| `ProjSrvcOrgControllingArea` |  | |  |  |  |  |
| `ProjSrvcOrgCompanyCode` |  | |  |  |  |  |
| `ProjSrvcOrgSalesOrg` |  | |  |  |  |  |
| `ProjSrvcOrgDivision` |  | |  |  |  |  |
| `ProjSrvcOrgDistributionChannel` |  | |  |  |  |  |
| `ProjSrvcOrgPurchaseOrg` |  | |  |  |  |  |
| `ProjSrvcOrgPlant` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_Text` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProjSrvcOrgText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Service Organization'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'ProjectServiceOrganization'
@ObjectModel.supportedCapabilities: [#EXTRACTION_DATA_SOURCE]
@ObjectModel.usageType:{
    serviceQuality: #C,
    sizeCategory: #M,
    dataClass: #ORGANIZATIONAL }

@Analytics.internalName:#LOCAL
@Analytics.dataExtraction.enabled: true

@VDM.viewType: #BASIC

define root view entity I_ProjSrvcOrg
  as select from R_ProjSrvcOrg

  composition [1..*] of I_ProjSrvcOrgCostCenter as _CostCenter

  association [1..*] to I_ProjSrvcOrgText       as _Text on  _Text.ProjectServiceOrganization = $projection.ProjectServiceOrganization

{

  key ProjectServiceOrganizationUUID,
      ProjectServiceOrganization,
      ProjectServiceOrganizationOID,
      @Semantics.booleanIndicator
      ProjSrvcOrgIsTimePostingAllwd,
      @Semantics.booleanIndicator
      ProjSrvcOrgIsProjDeliveryOrg,
      @Semantics.booleanIndicator
      ProjSrvcOrgIsResourceOrg,
      ProjSrvcOrgControllingArea,
      ProjSrvcOrgCompanyCode,
      ProjSrvcOrgSalesOrg,
      ProjSrvcOrgDivision,
      ProjSrvcOrgDistributionChannel,
      ProjSrvcOrgPurchaseOrg,
      ProjSrvcOrgPlant,
      CreatedByUser,
      CreationDateTime,
      LastChangedByUser,
      LastChangeDateTime,

      _CostCenter,
      _Text    
      
}
```
