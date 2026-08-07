---
name: I_REPROCESS
description: Reprocess
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - component:RE-FX-2CL
  - lob:Other
---
# I_REPROCESS

**Reprocess**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `REProcessUUID` | ✓ | |  | `processguid` |
| `REProcessVersion` | ✓ | |  | `version` |
| `RealEstateProcess` |  | |  | `cast(processid as recavdmprocessid preserving type )` |
| `RealEstateProcessExternal` |  | |  | `cast(processextid as recavdmprocessextid preserving type )` |
| `REProcessType` |  | |  | `cast(process as recavdmprocess preserving type )` |
| `REProcessMode` |  | |  | `processmode` |
| `REProcessNumberInFiscalYear` |  | |  | `cast(counter as recavdmprocesscounter preserving type )` |
| `FiscalYear` |  | |  | `fisc_year` |
| `REProcessDescription` |  | |  | `title` |
| `REProcessIsReversed` |  | |  | `flg_reversal` |
| `_REProcessType` | | ✓ | | |
| `_REProcessMode` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REProcessType` | `I_REProcessType` | [1..1] |
| `_REProcessMode` | `I_REProcessMode` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@Analytics: {
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@ObjectModel: {
  representativeKey: 'REProcessUUID',
  semanticKey: ['RealEstateProcess', 'REProcessVersion'],
  compositionRoot: false,
  usageType: {
    serviceQuality: #A,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL
  },
  modelingPattern: #NONE,
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE
  ],
  sapObjectNodeType.name: 'RealEstateProcess'
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Real Estate Process'
define view entity I_REProcess
  as select from vicaprocessid
  association [1..1] to I_REProcessType as _REProcessType on $projection.REProcessType = _REProcessType.REProcessType
  association [0..1] to I_REProcessMode as _REProcessMode on  $projection.REProcessType = _REProcessMode.REProcessType 
                                                          and $projection.REProcessMode = _REProcessMode.REProcessMode
{
  key processguid                                                as REProcessUUID,
  key version                                                    as REProcessVersion,
      @ObjectModel.text.element: ['REProcessDescription']
      cast(processid as recavdmprocessid preserving type )       as RealEstateProcess,
      cast(processextid as recavdmprocessextid preserving type ) as RealEstateProcessExternal,
      cast(process as recavdmprocess preserving type )           as REProcessType,
      processmode                                                as REProcessMode,
      cast(counter as recavdmprocesscounter preserving type )    as REProcessNumberInFiscalYear,
      fisc_year                                                  as FiscalYear,
      title                                                      as REProcessDescription,
      flg_reversal                                               as REProcessIsReversed,
      
      _REProcessType,
      _REProcessMode
}
```
