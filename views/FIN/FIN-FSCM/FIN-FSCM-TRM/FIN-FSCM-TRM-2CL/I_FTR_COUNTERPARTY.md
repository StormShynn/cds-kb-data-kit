---
name: I_FTR_COUNTERPARTY
description: Ftr Counterparty
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FTR_COUNTERPARTY

**Ftr Counterparty**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  |  |
| `AuthorizationGroup` |  | |  |  |
| `BusinessPartnerName` |  | |  | `cast( BusinessPartner.BusinessPartnerName as ftr_bpname )` |
| `IsBusinessPurposeCompleted` |  | |  |  |
| `DataControllerSet` |  | |  |  |
| `DataController1` |  | |  |  |
| `DataController2` |  | |  |  |
| `DataController3` |  | |  |  |
| `DataController4` |  | |  |  |
| `DataController5` |  | |  |  |
| `DataController6` |  | |  |  |
| `DataController7` |  | |  |  |
| `DataController8` |  | |  |  |
| `DataController9` |  | |  |  |
| `DataController10` |  | |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFTRCOUNTERPARTY'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass:  #CUSTOMIZING
@EndUserText.label: 'Counterparty'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'BusinessPartner'
@Search.searchable: true
@Consumption.ranked: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view I_Ftr_Counterparty
  as select from I_BusinessPartner            as BusinessPartner
    inner join   I_BusinessPartner_to_BP_Role as BusinessPartnerRole on  BusinessPartner.BusinessPartner         = BusinessPartnerRole.BusinessPartner
                                                                     and BusinessPartnerRole.RoleCategory        = 'TR0151'
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      @ObjectModel.text.element:  [ 'BusinessPartnerName' ]
  key BusinessPartner.BusinessPartner,
      @Search.ranking: #LOW
      BusinessPartner.AuthorizationGroup,
      @Semantics.text: true
      @Search.ranking: #LOW
      cast( BusinessPartner.BusinessPartnerName as ftr_bpname ) as BusinessPartnerName,
      @Search.ranking: #LOW
      BusinessPartner.IsBusinessPurposeCompleted,
      @Consumption.hidden:true
      @UI.hidden:true
      BusinessPartner.DataControllerSet,
      @Consumption.hidden:true
      @UI.hidden:true
      BusinessPartner.DataController1,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      BusinessPartner.DataController2,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      BusinessPartner.DataController3,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      BusinessPartner.DataController4,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      BusinessPartner.DataController5,
      @Consumption.hidden:true
      @UI.hidden:true
      BusinessPartner.DataController6,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      BusinessPartner.DataController7,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      BusinessPartner.DataController8,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      BusinessPartner.DataController9,
      //added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      BusinessPartner.DataController10
} group by  BusinessPartner.BusinessPartner, 
            BusinessPartner.AuthorizationGroup, 
            BusinessPartner.BusinessPartnerName, 
            BusinessPartner.IsBusinessPurposeCompleted, 
            BusinessPartner.DataControllerSet,
            BusinessPartner.DataController1,
            BusinessPartner.DataController2,
            BusinessPartner.DataController3,
            BusinessPartner.DataController4,
            BusinessPartner.DataController5,
            BusinessPartner.DataController6,
            BusinessPartner.DataController7,
            BusinessPartner.DataController8,
            BusinessPartner.DataController9,
            BusinessPartner.DataController10
```
