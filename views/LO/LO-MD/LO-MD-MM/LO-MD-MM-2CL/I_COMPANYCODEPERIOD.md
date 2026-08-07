---
name: I_COMPANYCODEPERIOD
description: "Company CodePERIOD"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - company-code
  - component:LO-MD-MM-2CL
  - lob:Logistics General
  - bo:CompanyCode
---
# I_COMPANYCODEPERIOD

**Company CodePERIOD**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `FiscalMonthCurrentPeriod` |  | |  | `lfmon` |  |  |
| `ProductCurrentFiscalYear` |  | |  | `cast ( lfgja as cmd_prd_lfgja preserving type )` |  |  |
| `FiscalMonthPreviousPeriod` |  | |  | `vmmon` |  |  |
| `ProdPreviousPeriodFiscalYear` |  | |  | `cast ( vmgja as cmd_prd_vmgja preserving type )` |  |  |
| `FiscalMonthLastYear` |  | |  | `vjmon` |  |  |
| `ProductLastFiscalYear` |  | |  | `cast (vjgja as cmd_prd_vjgja preserving type )` |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Company Code Period'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #M,
  dataClass: #CUSTOMIZING
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET                                   
                                      
]
@ObjectModel.modelingPattern:#NONE
@VDM.viewType: #BASIC 
@AbapCatalog.entityBuffer.definitionAllowed: true
define view entity I_CompanyCodePeriod as select from marv
{
  key bukrs as CompanyCode,
  lfmon as FiscalMonthCurrentPeriod,
  cast ( lfgja as cmd_prd_lfgja preserving type ) as ProductCurrentFiscalYear,
  vmmon as FiscalMonthPreviousPeriod,
  cast ( vmgja as cmd_prd_vmgja preserving type )    as ProdPreviousPeriodFiscalYear,
  vjmon as FiscalMonthLastYear,
  cast (vjgja  as cmd_prd_vjgja  preserving type ) as ProductLastFiscalYear 

}
```
