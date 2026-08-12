---
name: C_SALESPLANVALUEHELP
description: "Salesplanvaluehelp"
app_component: SD-ANA-SP-2CL
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
  - SD
  - SD-ANA
  - SD-ANA-SP
  - consumption-view
  - value-help
  - component:SD-ANA-SP-2CL
  - lob:Sales & Distribution
---
# C_SALESPLANVALUEHELP

**Salesplanvaluehelp**

| Property | Value |
|---|---|
| App Component | `SD-ANA-SP-2CL` |
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
| `SalesPlanUUID` | ✓ | |  |  |  |  |
| `SalesPlan` |  | |  |  |  |  |
| `SalesPlanDescription` |  | |  |  |  |  |
| `SalesPlanVersion` |  | |  |  |  |  |
| `SalesPlanVersionDescription` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `UserDescription` |  | |  | `cast( _CreatedByUser.UserDescription as sp_username preserving type )` |  |  |
| `SalesPlanStatus` |  | |  | `_SalesPlanStatus._Text[1: Language=$session.system_language].SalesPlanStatusDesc` |  |  |
| `SalesPlanPurpose` |  | |  | `_SalesPlanPurposeText[1: Language=$session.system_language].SalesPlanPurposeDesc` |  |  |
| `SalesPlanPeriodTypeName` |  | |  | `_SalesPlanPeriodTypeText[1: Language=$session.system_language].SalesPlanPeriodTypeName` |  |  |
| `SalesPlanFrom` |  | |  |  |  |  |
| `SalesPlanTo` |  | |  |  |  |  |
| `SalesPlanCurrency` |  | |  |  |  |  |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@EndUserText.label: 'Sales Plan'
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'CSDSLSPLNVH'
@AbapCatalog.dbHints: [{dbSystem: #HDB, hint: 'NO_SUBPLAN_SHARING'}]
@Search.searchable: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #VALUE_HELP_PROVIDER,
                                      #SEARCHABLE_ENTITY]
define view C_SalesPlanValueHelp
  as select from I_SalesPlanTP as SP
{
  key SalesPlanUUID,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @ObjectModel.text.element: ['SalesPlanDescription']
      SalesPlan,
      
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Semantics.text:true
      SalesPlanDescription,    
      
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @ObjectModel.text.element: ['SalesPlanVersionDescription']
      SalesPlanVersion,
      
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Semantics.text:true
      @UI.hidden: true
      SalesPlanVersionDescription,
      
      
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @ObjectModel.text.element: ['UserDescription']
      CreatedByUser,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Semantics.text:true
      cast( _CreatedByUser.UserDescription as sp_username preserving type )             as UserDescription,
      
      @Search.defaultSearchElement: true
          //@Search.fuzzinessThreshold: 0.8
      @Semantics.text:true
      _SalesPlanStatus._Text[1: Language=$session.system_language].SalesPlanStatusDesc  as SalesPlanStatus,
      
          
//      @Search.defaultSearchElement: true
//      @Semantics.text:true
//      _SalesPlanTypeText[1: Language=$session.system_language].SalesPlanTypeDesc  as SalesPlanType,
      
      @Search.defaultSearchElement: true
      @Semantics.text:true
      _SalesPlanPurposeText[1: Language=$session.system_language].SalesPlanPurposeDesc  as SalesPlanPurpose,
      
      
      @Search.defaultSearchElement: true
      @EndUserText.label: 'Planned By'
      @Semantics.text:true
      _SalesPlanPeriodTypeText[1: Language=$session.system_language].SalesPlanPeriodTypeName  as SalesPlanPeriodTypeName,      
      
      @Search.defaultSearchElement: true
      //@Search.fuzzinessThreshold: 0.8
      //@Semantics.text:true
      SalesPlanFrom,

      @Search.defaultSearchElement: true
      //@Search.fuzzinessThreshold: 0.8
      //@Semantics.text:true
      SalesPlanTo,

      @Search.defaultSearchElement: true
      //@Search.fuzzinessThreshold: 0.8
      //@Semantics.text:true
      SalesPlanCurrency

//      LastChangeDateTime
}
//where
//  CreatedByUser = $session.user
//  or
//  (SalesPlanStatus = 'A' and CreatedByUser <> $session.user)
```
