---
name: I_RETSMGMTPROCSTEPEXECSTATUS
description: Retsmgmtprocstepexecstatus
app_component: LO-ARM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-ARM
  - interface-view
  - status
  - component:LO-ARM-2CL
  - lob:Logistics General
---
# I_RETSMGMTPROCSTEPEXECSTATUS

**Retsmgmtprocstepexecstatus**

| Property | Value |
|---|---|
| App Component | `LO-ARM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `RetsMgmtProcStepExecStatus` | ✓ | |  | `cast( substring(dd07l.domvalue_l, 1, 1) as msr_exec_step_status)` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_RetsMgmtProcStpExecStsText` | [0..*] |

## Source Code

```abap
@ObjectModel.representativeKey: 'RetsMgmtProcStepExecStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.resultSet.sizeCategory: #XS
@Search.searchable: true
@EndUserText.label: 'Execution Status of Returns Process Step'
@Analytics: { dataCategory: #DIMENSION, 
              dataExtraction.enabled: true,
              internalName: #LOCAL }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:        #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #EXTRACTION_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,                                
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE, 
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.sapObjectNodeType.name:'RetsMgmtProcStepExecStatus'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@AbapCatalog.entityBuffer.definitionAllowed:true
define view entity I_RetsMgmtProcStepExecStatus
  as select from dd07l
  association [0..*] to I_RetsMgmtProcStpExecStsText as _Text on $projection.RetsMgmtProcStepExecStatus = _Text.RetsMgmtProcStepExecStatus
{
      //key
      @ObjectModel.text.association: '_Text'
  key cast( substring(dd07l.domvalue_l, 1, 1) as msr_exec_step_status) as RetsMgmtProcStepExecStatus,
  
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l as DomainValue,

      _Text

}
where
  (
    dd07l.domname  = 'MSR_EXEC_STEP_STATUS'
  )
  and(
    dd07l.as4local = 'A'
  )
  and(
    dd07l.as4vers  = '0000' 
  );
```
