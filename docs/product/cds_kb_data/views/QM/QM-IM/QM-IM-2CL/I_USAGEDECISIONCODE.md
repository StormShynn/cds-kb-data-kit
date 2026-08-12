---
name: I_USAGEDECISIONCODE
description: "Usagedecisioncode"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_USAGEDECISIONCODE

**Usagedecisioncode**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `UsageDecisionCodeGroup` | ✓ | |  | `codegruppe` |  |  |
| `UsageDecisionCode` | ✓ | |  | `code` |  |  |
| `CodeIsInactive` |  | |  | `case qpcd.inaktiv when ' ' then cast( ' ' as vdm_qm_codeisinactive preserving type ) else cast( 'X' as vdm_qm_codeisinactive preserving type ) end` |  |  |
| `UsgeDcsnCodeCreatedBy` |  | |  | `ersteller` |  |  |
| `UsgeDcsnCodeCreatedOn` |  | |  | `e_datum` |  |  |
| `UsgeDcsnCodeLastChangedBy` |  | |  | `aenderer` |  |  |
| `UsgeDcsnCodeLastChangedOn` |  | |  | `a_datum` |  |  |
| `_UsageDecisionCodeGroup` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_UsageDecisionCodeGroup` | `I_UsageDecisionCodeGroup` | [0..1] |
| `_Text` | `I_UsageDecisionCodeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IUSGDECCODE'
//@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Usage Decision Code'
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'UsageDecisionCode'
@ObjectModel.usageType: {
    dataClass: #CUSTOMIZING,
    sizeCategory: #M,
    serviceQuality: #A 
}
@Metadata.ignorePropagatedAnnotations: true
define view I_UsageDecisionCode as select from qpcd
    association [0..1] to I_UsageDecisionCodeGroup as _UsageDecisionCodeGroup
      on $projection.UsageDecisionCodeGroup = _UsageDecisionCodeGroup.UsageDecisionCodeGroup
    association [0..*] to I_UsageDecisionCodeText as _Text 
      on $projection.UsageDecisionCodeGroup = _Text.UsageDecisionCodeGroup and
         $projection.UsageDecisionCode = _Text.UsageDecisionCode
{
      //--[ GENERATED:012:GlBfhyFV7kY4h7jYW0xcqG
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_UsageDecisionCodeGroupStdVH',
                     element: 'UsageDecisionCodeGroup' }
        }]
      // ]--GENERATED
    @ObjectModel.foreignKey.association: '_UsageDecisionCodeGroup'
    key qpcd.codegruppe as UsageDecisionCodeGroup,
//  key qpcd.version --> is always 1 so we could leave out
    @ObjectModel.text.association: '_Text'
    key qpcd.code as UsageDecisionCode,
    
    @Semantics.text: true
    _Text[1:Language = $session.system_language].UsageDecisionCodeText,
    
    // DB field has three values, but field shall be indicator
//   @Semantics.booleanIndicator: true  // It is boolean, but we cannot tag it, due to static code check
    case qpcd.inaktiv
      when ' ' then cast( ' ' as vdm_qm_codeisinactive preserving type )
      else cast( 'X' as vdm_qm_codeisinactive preserving type )
    end                                                        as CodeIsInactive,    

    @Semantics.user.createdBy: true
    qpcd.ersteller      as UsgeDcsnCodeCreatedBy,
    @Semantics.businessDate.at: true
    qpcd.e_datum        as UsgeDcsnCodeCreatedOn,
    @Semantics.user.lastChangedBy: true
    qpcd.aenderer       as UsgeDcsnCodeLastChangedBy,
    @Semantics.businessDate.at: true
    qpcd.a_datum        as UsgeDcsnCodeLastChangedOn,
        
    _UsageDecisionCodeGroup,
    _Text

}
where qpcd.katalogart = '3' // Usage Decision
  and qpcd.version = '000001'
```
