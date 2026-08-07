---
name: I_RETSMGMTPROCSTPEXECSTSTEXT
description: "Retsmgmtprocstpexecststext"
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
  - text-view
  - text
  - component:LO-ARM-2CL
  - lob:Logistics General
---
# I_RETSMGMTPROCSTPEXECSTSTEXT

**Retsmgmtprocstpexecststext**

| Property | Value |
|---|---|
| App Component | `LO-ARM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RetsMgmtProcStepExecStatus` | ✓ | |  | `cast( substring(dd07t.domvalue_l, 1, 1) as msr_exec_step_status preserving type)` |  |  |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `RetsProcStpExecStsDescription` |  | |  | `ddtext` |  |  |
| `_ReturnsProcStepExecStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ReturnsProcStepExecStatus` | `I_RetsMgmtProcStepExecStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ObjectModel.representativeKey: 'RetsMgmtProcStepExecStatus'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@EndUserText.label: 'Execution Status of Returns Process Step - Text'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true 
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SEARCHABLE_ENTITY,
                                        #LANGUAGE_DEPENDENT_TEXT ]
//@AbapCatalog.entityBuffer.definitionAllowed:true
define view entity I_RetsMgmtProcStpExecStsText
  as select from dd07t
  association [0..1] to I_RetsMgmtProcStepExecStatus as _ReturnsProcStepExecStatus on $projection.RetsMgmtProcStepExecStatus = _ReturnsProcStepExecStatus.RetsMgmtProcStepExecStatus
  association [0..1] to I_Language                   as _Language                  on $projection.Language = _Language.Language
{
      //Key
      @ObjectModel.foreignKey.association: '_ReturnsProcStepExecStatus'
      @ObjectModel.text.element: ['RetsProcStpExecStsDescription']
  key cast( substring(dd07t.domvalue_l, 1, 1) as msr_exec_step_status preserving type) as RetsMgmtProcStepExecStatus,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( dd07t.ddlanguage as spras preserving type )       as Language,
  
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l as DomainValue,

      //Name
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      dd07t.ddtext                                            as RetsProcStpExecStsDescription,
      //Associations
      _ReturnsProcStepExecStatus,
      _Language
}
where
  (
    dd07t.domname  = 'MSR_EXEC_STEP_STATUS'
  )
  and(
    dd07t.as4local = 'A'
  )
  and(
    dd07t.as4vers  = '0000' 
  );
```
