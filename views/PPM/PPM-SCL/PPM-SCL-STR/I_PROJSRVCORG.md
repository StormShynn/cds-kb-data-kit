---
name: I_PROJSRVCORG
description: "Projsrvcorg"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
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
