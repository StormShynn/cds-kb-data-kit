---
name: I_CNSLDTNUNITBYTIMEVERSION_2
description: Cnsldtnunitbytimeversion 2
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNUNITBYTIMEVERSION_2

**Cnsldtnunitbytimeversion 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ConsolidationUnit` | `_UnitByTimeVersion.ConsolidationUnit` |
| key `ConsolidationVersion` | `_UnitByTimeVersion.ConsolidationVersion` |
| key `FromFiscalYearPeriod` | `_UnitByTimeVersion.FromFiscalYearPeriod` |
| `ToFiscalYearPeriod` | `ToFiscalYearPeriod` |
| `ConsolidationUnitIsPartnerOnly` | `ConsolidationUnitIsPartnerOnly` |
| `CnsldtnCrcyTranslationMethod` | `CnsldtnCrcyTranslationMethod` |
| `CnsldtnTaxRate` | `CnsldtnTaxRate` |
| `FiscalYearVariant` | `FiscalYearVariant` |
| `CnsldtnUnivJournalIntegType` | `CnsldtnUnivJournalIntegType` |
| `CnsldtnGroupCrcyIsLeadingCrcy` | `CnsldtnGroupCrcyIsLeadingCrcy` |
| `CnsldtnUnitLocalCrcySource` | `CnsldtnUnitLocalCrcySource` |
| `CnsldtnUnitGroupCrcySource` | `CnsldtnUnitGroupCrcySource` |
| `CnsldtnUploadMethod` | `CnsldtnUploadMethod` |
| `CnsldtnUnitDataCollection` | `_UnitByTimeVersion.CnsldtnUnitDataCollection` |
| `ConsolidationUnitPartner` | `_UnitByTimeVersion.ConsolidationUnitPartner` |
| `ConsolidationUnitPostingRule` | `_UnitByTimeVersion.ConsolidationUnitPostingRule` |
| `ConsolidationUnitValidation` | `_UnitByTimeVersion.ConsolidationUnitValidation` |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_CnsldtnUnitByTimeVersion` | [1..1] |

## Source Code

```abap
@Analytics: {
  internalName: #LOCAL,
  dataExtraction.enabled: true,
  technicalName: 'ICSCONSUNITATVD2'
}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata:{
  ignorePropagatedAnnotations: true,
  allowExtensions: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #L},
  representativeKey: 'ConsolidationUnit',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'ConsolidationUnitByTimeVersion'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Unit by Time and Version'

define view entity I_CnsldtnUnitByTimeVersion_2
  as select from P_CnsldtnUnitByTimeVersion_2 as _UnitByTimeVersion

  //do not expose this association in the projection list of the view
  association [1..1] to E_CnsldtnUnitByTimeVersion as _Extension on  _UnitByTimeVersion.ConsolidationUnit           = _Extension.ConsolidationUnit
                                                                 and _UnitByTimeVersion.CnsldtnUnitAttributeVersion = _Extension.CnsldtnUnitAttributeVersion
                                                                 and _UnitByTimeVersion.FromFiscalYearPeriod        = _Extension.FromFiscalYearPeriod
{
       @ObjectModel: {
        sapObjectNodeTypeReference: 'ConsolidationUnit' }
       @Consumption.valueHelpDefinition: [{ entity:{
           name: 'I_CnsldtnUnitVH',
           element: 'ConsolidationUnit' } }]
  key  _UnitByTimeVersion.ConsolidationUnit,

       @ObjectModel: {
        foreignKey.association: '_CnsldtnVersion',
        sapObjectNodeTypeReference: 'ConsolidationVersion' }
       @Consumption.valueHelpDefinition: [{ entity:{
           name: 'I_CnsldtnVersionVH',
           element: 'ConsolidationVersion' } }]
  key  _UnitByTimeVersion.ConsolidationVersion,

       @Semantics.fiscal.yearPeriod: true
  key  _UnitByTimeVersion.FromFiscalYearPeriod,

       @Semantics.fiscal.yearPeriod: true
       ToFiscalYearPeriod,

       ConsolidationUnitIsPartnerOnly,

       @ObjectModel: { sapObjectNodeTypeReference: 'CnsldtnCrcyTranslationMethod' }
       @Consumption.valueHelpDefinition: [{ entity:{
           name: 'I_CnsldtnCrcyTrnsltnMethodVH',
           element: 'CnsldtnCrcyTranslationMethod' } }]
       CnsldtnCrcyTranslationMethod,

       //@ObjectModel: { sapObjectNodeTypeReference: '' }
       CnsldtnTaxRate,

       @Consumption.valueHelpDefinition: [{ entity:{
           name: 'I_FiscalYearVariantStdVH',
           element: 'FiscalYearVariant' } }]
       FiscalYearVariant,

       CnsldtnUnivJournalIntegType,

       CnsldtnGroupCrcyIsLeadingCrcy,

       CnsldtnUnitLocalCrcySource,

       CnsldtnUnitGroupCrcySource,

       CnsldtnUploadMethod,

       @ObjectModel:{
        foreignKey.association: '_CnsldtnUnitDataColl',
        sapObjectNodeTypeReference: 'CnsldtnUnitDataCollection' }
       @Consumption.valueHelpDefinition: [{
         entity: {
           name: 'I_CnsldtnUnitDataCollVH',
           element: 'CnsldtnUnitDataCollection'
         }
       }]
       _UnitByTimeVersion.CnsldtnUnitDataCollection,

       @ObjectModel:{
        sapObjectNodeTypeReference: 'ConsolidationUnitPartner' ,
        foreignKey.association: '_CnsldtnUnitPartner' }
       @Consumption.valueHelpDefinition: [{
         entity: {
           name: 'I_CnsldtnUnitPartnerVH',
           element: 'ConsolidationUnitPartner'
         }
       }]
       _UnitByTimeVersion.ConsolidationUnitPartner,

       @ObjectModel:{
        sapObjectNodeTypeReference: 'ConsolidationUnitPostingRule',
        foreignKey.association: '_CnsldtnUnitPostingRule' }
       @Consumption.valueHelpDefinition: [{
         entity: {
           name: 'I_CnsldtnUnitPostingRuleVH',
           element: 'ConsolidationUnitPostingRule'
         }
       }]
       _UnitByTimeVersion.ConsolidationUnitPostingRule,

       @ObjectModel: {
        sapObjectNodeTypeReference: 'ConsolidationUnitValidation' ,
        foreignKey.association: '_CnsldtnUnitValidation' }
       @Consumption.valueHelpDefinition: [{
         entity: {
           name: 'I_CnsldtnUnitValidationVH',
           element: 'ConsolidationUnitValidation'
         }
       }]
       _UnitByTimeVersion.ConsolidationUnitValidation,


       _UnitByTimeVersion._CnsldtnVersion,
       _UnitByTimeVersion._CnsldtnUnitDataColl,
       _UnitByTimeVersion._CnsldtnUnitPartner,
       _UnitByTimeVersion._CnsldtnUnitPostingRule,
       _UnitByTimeVersion._CnsldtnUnitValidation
}
```
