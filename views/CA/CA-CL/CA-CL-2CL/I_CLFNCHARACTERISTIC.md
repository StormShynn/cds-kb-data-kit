---
name: I_CLFNCHARACTERISTIC
description: Clfncharacteristic
app_component: CA-CL-2CL
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-CL
  - interface-view
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCHARACTERISTIC

**Clfncharacteristic**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CharcInternalID` | `Characteristic.CharcInternalID` |
| key `TimeIntervalNumber` | `Characteristic.TimeIntervalNumber` |
| `Characteristic` | `Characteristic.Characteristic` |
| `CharcStatus` | `Characteristic.CharcStatus` |
| `CharcDataType` | `Characteristic.CharcDataType` |
| `CharcLength` | `Characteristic.CharcLength` |
| `CharcDecimals` | `Characteristic.CharcDecimals` |
| `CharcTemplate` | `Characteristic.CharcTemplate` |
| `ValueIsCaseSensitive` | `Characteristic.ValueIsCaseSensitive` |
| `CharcConversionRoutine` | `Characteristic.CharcConversionRoutine` |
| `CharcGroup` | `Characteristic.CharcGroup` |
| `EntryIsRequired` | `cast ( Characteristic.EntryRequiredCode as entryisrequired preserving type )` |
| `MultipleValuesAreAllowed` | `cast ( Characteristic.MultipleValuesAllowedCode as multiplevaluesareallowed preserving type )` |
| `CharcValueUnit` | `Characteristic.CharcValueUnit` |
| `Currency` | `Characteristic.Currency` |
| `CharcExponentFormat` | `Characteristic.CharcExponentFormat` |
| `CharcExponentValue` | `Characteristic.CharcExponentValue` |
| `ValueIntervalIsAllowed` | `cast ( Characteristic.ValueIntervalAllowedCode as valueintervalisallowed preserving type )` |
| `AdditionalValueIsAllowed` | `cast ( Characteristic.AdditionalValueAllowedCode as additionalvalueisallowed preserving type )` |
| `NegativeValueIsAllowed` | `Characteristic.NegativeValueIsAllowed` |
| `ValidityStartDate` | `Characteristic.ValidityStartDate` |
| `ValidityEndDate` | `Characteristic.ValidityEndDate` |
| `ChangeNumber` | `Characteristic.ChangeNumber` |
| `IsDeleted` | `Characteristic.IsDeleted` |
| `DocumentInfoRecordDocType` | `Characteristic.DocumentInfoRecordDocType` |
| `DocumentInfoRecordDocNumber` | `Characteristic.DocumentInfoRecordDocNumber` |
| `DocumentInfoRecordDocVersion` | `Characteristic.DocumentInfoRecordDocVersion` |
| `DocumentInfoRecordDocPart` | `Characteristic.DocumentInfoRecordDocPart` |
| `CharcMaintAuthGrp` | `Characteristic.CharcMaintAuthGrp` |
| `CharcIsReadOnly` | `cast ( Characteristic.CharcReadOnlyCode as charcisreadonly preserving type )` |
| `CharcIsHidden` | `cast ( Characteristic.CharcHiddenCode as charcishidden preserving type )` |
| `CharcIsRestrictable` | `cast ( Characteristic.CharcRestrictableCode as charcisrestrictable preserving type )` |
| `CharcReferenceTable` | `Characteristic.CharcReferenceTable` |
| `CharcReferenceTableField` | `Characteristic.CharcReferenceTableField` |
| `CharcCheckTable` | `Characteristic.CharcCheckTable` |
| `CharcCheckFunctionModule` | `Characteristic.CharcCheckFunctionModule` |
| `CharcEntryIsNotFormatCtrld` | `cast ( Characteristic.CharcEntryNotFormatCtrldCode as charcentryisnotformatctrld preserving type )` |
| `CharcTemplateIsDisplayed` | `cast ( Characteristic.CharcTemplateDisplayedCode as charctemplateisdisplayed preserving type )` |
| `CharcSelectedSet` | `Characteristic.CharcSelectedSet` |
| `Plant` | `Characteristic.Plant` |
| `CharcCatalogType` | `Characteristic.CharcCatalogType` |
| `CreatedByUser` | `Characteristic.CreatedByUser` |
| `CreationDate` | `Characteristic.CreationDate` |
| `LastChangedByUser` | `Characteristic.LastChangedByUser` |
| `LastChangeDate` | `Characteristic.LastChangeDate` |
| `CharcLastChangedDateTime` | `Characteristic.CharcLastChangedDateTime` |
| `_CharacteristicGroup` | *Association* |
| `_CharacteristicStatus` | *Association* |
| `_UnitOfMeasure` | *Association* |
| `_Currency` | *Association* |
| `_CreatedByUser` | *Association* |
| `_LastChangedByUser` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CharacteristicGroup` | `I_ClfnCharcGroup` | [0..1] |
| `_CharacteristicStatus` | `I_ClfnCharcStatus` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'INGCCHR1'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser']
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Classification Characteristic'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities:
  [  #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #SQL_DATA_SOURCE                  ]
@ObjectModel.usageType.dataClass: #MASTER     
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
define view I_ClfnCharacteristic
  as select from I_ClfnCharcBasic as Characteristic 
  
      association [0..1] to I_ClfnCharcGroup as _CharacteristicGroup
        on  $projection.CharcGroup  = _CharacteristicGroup.CharcGroup
  
      association [0..1] to I_ClfnCharcStatus as _CharacteristicStatus
        on  $projection.CharcStatus  = _CharacteristicStatus.CharcStatus

      association [0..1] to I_UnitOfMeasure as _UnitOfMeasure
        on  $projection.CharcValueUnit  = _UnitOfMeasure.UnitOfMeasure
        and $projection.CharcDataType   = 'NUM'
 
      association [0..1] to I_Currency as _Currency
        on  $projection.Currency        = _Currency.Currency
        and $projection.CharcDataType   = 'CURR'
                
      association [0..1] to I_User as _CreatedByUser
        on  $projection.CreatedByUser = _CreatedByUser.UserID
      
      association [0..1] to I_User as _LastChangedByUser
        on  $projection.LastChangedByUser = _LastChangedByUser.UserID
        
{
  key Characteristic.CharcInternalID, 
  key Characteristic.TimeIntervalNumber,  
      Characteristic.Characteristic,
      Characteristic.CharcStatus,
      Characteristic.CharcDataType,
      Characteristic.CharcLength,
      Characteristic.CharcDecimals,
      Characteristic.CharcTemplate,
      Characteristic.ValueIsCaseSensitive,
      Characteristic.CharcConversionRoutine,
      Characteristic.CharcGroup,
      cast ( Characteristic.EntryRequiredCode as entryisrequired preserving type ) as EntryIsRequired, // no overwritten characteristic: the representation of the field needed to change from code to indicator
      cast ( Characteristic.MultipleValuesAllowedCode as multiplevaluesareallowed preserving type ) as MultipleValuesAreAllowed, // no overwritten characteristic: the representation of the field needed to change from code to indicator  
      Characteristic.CharcValueUnit,
      Characteristic.Currency,      
      Characteristic.CharcExponentFormat,
      Characteristic.CharcExponentValue,
      cast ( Characteristic.ValueIntervalAllowedCode as valueintervalisallowed preserving type ) as ValueIntervalIsAllowed, // no overwritten characteristic: the representation of the field needed to change from code to indicator 
      cast ( Characteristic.AdditionalValueAllowedCode as additionalvalueisallowed preserving type ) as AdditionalValueIsAllowed, // no overwritten characteristic: the representation of the field needed to change from code to indicator 
      Characteristic.NegativeValueIsAllowed,
      @Semantics.businessDate.from: true
      Characteristic.ValidityStartDate,
      @Semantics.businessDate.to: true
      Characteristic.ValidityEndDate,         
      Characteristic.ChangeNumber,
      Characteristic.IsDeleted,
      Characteristic.DocumentInfoRecordDocType,
      Characteristic.DocumentInfoRecordDocNumber,
      Characteristic.DocumentInfoRecordDocVersion,
      Characteristic.DocumentInfoRecordDocPart,
      Characteristic.CharcMaintAuthGrp,
      cast ( Characteristic.CharcReadOnlyCode as charcisreadonly preserving type ) as CharcIsReadOnly, // no overwritten characteristic: the representation of the field needed to change from code to indicator  
      cast ( Characteristic.CharcHiddenCode as charcishidden preserving type ) as CharcIsHidden, // no overwritten characteristic: the representation of the field needed to change from code to indicator
      cast ( Characteristic.CharcRestrictableCode as charcisrestrictable preserving type ) as CharcIsRestrictable, // no overwritten characteristic: the representation of the field needed to change from code to indicator  
      Characteristic.CharcReferenceTable,
      Characteristic.CharcReferenceTableField,
      Characteristic.CharcCheckTable,
      Characteristic.CharcCheckFunctionModule,
      cast ( Characteristic.CharcEntryNotFormatCtrldCode as charcentryisnotformatctrld preserving type ) as CharcEntryIsNotFormatCtrld, // no overwritten characteristic: the representation of the field needed to change from code to indicator    
      cast ( Characteristic.CharcTemplateDisplayedCode as charctemplateisdisplayed preserving type ) as CharcTemplateIsDisplayed, // no overwritten characteristic: the representation of the field needed to change from code to indicator
      Characteristic.CharcSelectedSet,
      Characteristic.Plant,
      Characteristic.CharcCatalogType,
      Characteristic.CreatedByUser,
      Characteristic.CreationDate,
      Characteristic.LastChangedByUser,
      Characteristic.LastChangeDate,
      Characteristic.CharcLastChangedDateTime,
      
      _CharacteristicGroup,
      _CharacteristicStatus,     
      _UnitOfMeasure,
      _Currency,
      _CreatedByUser,
      _LastChangedByUser
}
  where Characteristic.CharcIdentificationCode = ''  // overwritten characteristics are skipped
```
