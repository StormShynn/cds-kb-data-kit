---
name: I_JNTOPGAGRMT
description: Jntopgagrmt
app_component: CA-JVA
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-JVA
  - interface-view
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JNTOPGAGRMT

**Jntopgagrmt**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |
| `JntOpgAgrmt` | ✓ | |  | `joa` |
| `JntVntrContractNmbr` |  | |  | `contract` |
| `JntVntrPayrollClearingSet` |  | |  | `payset` |
| `JntVntrConstructionExclsnSet` |  | |  | `xsetcon` |
| `JntVntrCatastropheExclsnSet` |  | |  | `xsetcat` |
| `JntVntrConstructionOvhdRule` |  | |  | `conrule` |
| `JntVntrCatastropheOvhdRule` |  | |  | `catrule` |
| `JVAOvhdPercentProdg` |  | |  | `per1` |
| `JVAExclsnAcctSetPercentProdg` |  | |  | `xper1` |
| `JVAOvhdPercentDev` |  | |  | `per2` |
| `JVAExclsnAcctSetPercentDev` |  | |  | `xper2` |
| `JntVntrExplorationOvhdRule` |  | |  | `exprule` |
| `JntVntrDrillingOvhdRule` |  | |  | `drlrule` |
| `JntVntrCapitalExclsnSet` |  | |  | `xsetcap` |
| `JntVntrOvhdOffsetCostCtr` |  | |  | `offcc` |
| `JntOpgAgrmtProdgWellThld` |  | |  | `joaprth` |
| `JntVntrOvhdRecurringDoc` |  | |  | `recdoc` |
| `CompanyCodeCurrency` |  | | `_CompanyCode` | `Currency` |
| `JntVntrOvhdFlatRateAmt` |  | |  | `} flatrate` |
| `JntVntrExpnIsEscalated` |  | |  | `escal` |
| `JntOpgAgrmtClass` |  | |  | `aclass` |
| `JntOpgAgrmtCreatedByUser` |  | |  | `cruser` |
| `JntOpgAgrmtCreationTime` |  | |  | `case when crtime is null or crtime = '' then cast('000000' as abap.tims) else cast(substring(crtime, 1, 6) as abap.tims) end` |
| `JntOpgAgrmtCreationDate` |  | |  | `case when crdate is null or crdate = '' then cast('00000000'as jv_crdate ) else crdate end` |
| `JntOpgAgrmtLastChangedByUser` |  | |  | `chuser` |
| `JntOpgAgrmtLastChangedTime` |  | |  | `case when chtime is null or chtime = '' then cast('000000' as abap.tims) else cast(substring(chtime, 1, 6) as abap.tims) end` |
| `JntOpgAgrmtLastChangedDate` |  | |  | `case when chdate is null or chdate = '' then cast('00000000' as jv_chdate) else chdate end` |
| `JntVntrPrioPerdDrillingIsCalc` |  | |  | `drillp` |
| `JntVntrWBSElmntOvhdIsCalc` |  | |  | `allwbs` |
| `JntOpgAgrmtDrillingPayRate` |  | |  | `dfpay` |
| `JntOpgAgrmtNonDrillingPayRate` |  | |  | `ndpay` |
| `_CompanyCode` | | ✓ | | |
| `_JntOpgAgrmtClass` | | ✓ | | |
| `_JntOpgAgrmtText` | | ✓ | | |
| `_JntOpgAgrmtEquityTypeGrp` | | ✓ | | |
| `_JntOpgAgrmtPartShr` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_JntOpgAgrmtClass` | `I_JntOpgAgrmtClass` | [1..1] |
| `_JntOpgAgrmtText` | `I_JntOpgAgrmtText` | [0..*] |
| `_JntOpgAgrmtEquityTypeGrp` | `I_JntOpgAgrmtEquityTypeGrp` | [0..*] |
| `_JntOpgAgrmtPartShr` | `I_JntOpgAgrmtPartShr` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJOA'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Joint Operating Agreement'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@ObjectModel:{
 representativeKey: 'JntOpgAgrmt',
 usageType.dataClass: #MASTER,
 usageType.sizeCategory: #L,
 usageType.serviceQuality: #A,
 supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, 
                         #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY, #UI_PROVIDER_PROJECTION_SOURCE ],
                modelingPattern: #ANALYTICAL_DIMENSION }
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@ObjectModel.sapObjectNodeType.name: 'JointOperatingAgreement'
@ClientHandling.algorithm: #SESSION_VARIABLE

define view I_JntOpgAgrmt
  as select from t8ju
  association [1..1] to I_CompanyCode              as _CompanyCode              on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_JntOpgAgrmtClass         as _JntOpgAgrmtClass         on  $projection.CompanyCode      = _JntOpgAgrmtClass.CompanyCode
                                                                                and $projection.JntOpgAgrmtClass = _JntOpgAgrmtClass.JntOpgAgrmtClass
  association [0..*] to I_JntOpgAgrmtText          as _JntOpgAgrmtText          on  $projection.CompanyCode = _JntOpgAgrmtText.CompanyCode
                                                                                and $projection.JntOpgAgrmt = _JntOpgAgrmtText.JntOpgAgrmt
  association [0..*] to I_JntOpgAgrmtEquityTypeGrp as _JntOpgAgrmtEquityTypeGrp on  $projection.CompanyCode = _JntOpgAgrmtEquityTypeGrp.CompanyCode
                                                                                and $projection.JntOpgAgrmt = _JntOpgAgrmtEquityTypeGrp.JntOpgAgrmt
  association [0..*] to I_JntOpgAgrmtPartShr       as _JntOpgAgrmtPartShr       on  $projection.CompanyCode = _JntOpgAgrmtPartShr.CompanyCode
                                                                                and $projection.JntOpgAgrmt = _JntOpgAgrmtPartShr.JntOpgAgrmt
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_JointVentureCompanyCodeVH',
                           element: 'CompanyCode' }
              }]
  key bukrs                 as CompanyCode,
      @ObjectModel.text.association: '_JntOpgAgrmtText'
      @Consumption.valueHelpDefinition: [
             { entity:  { name:    'I_JntOpgAgrmtVH',
                          element: 'JntOpgAgrmt' }
              }]            
  key joa                   as JntOpgAgrmt,
      contract              as JntVntrContractNmbr,
      payset                as JntVntrPayrollClearingSet,
      xsetcon               as JntVntrConstructionExclsnSet,
      xsetcat               as JntVntrCatastropheExclsnSet,
      conrule               as JntVntrConstructionOvhdRule,
      catrule               as JntVntrCatastropheOvhdRule,
      per1                  as JVAOvhdPercentProdg,
      xper1                 as JVAExclsnAcctSetPercentProdg,
      per2                  as JVAOvhdPercentDev,
      xper2                 as JVAExclsnAcctSetPercentDev,
      exprule               as JntVntrExplorationOvhdRule,
      drlrule               as JntVntrDrillingOvhdRule,
      xsetcap               as JntVntrCapitalExclsnSet,
      offcc                 as JntVntrOvhdOffsetCostCtr,
      joaprth               as JntOpgAgrmtProdgWellThld,
      recdoc                as JntVntrOvhdRecurringDoc,
      @Semantics.currencyCode: true
      _CompanyCode.Currency as CompanyCodeCurrency,
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      flatrate              as JntVntrOvhdFlatRateAmt,
      escal                 as JntVntrExpnIsEscalated,
      @ObjectModel.foreignKey.association: '_JntOpgAgrmtClass'
      aclass                as JntOpgAgrmtClass,
      cruser                as JntOpgAgrmtCreatedByUser,

      case when crtime is null or crtime = ''
         then cast('000000' as abap.tims)
         else cast(substring(crtime, 1, 6) as abap.tims)
       end                  as JntOpgAgrmtCreationTime,

      case when crdate is null or crdate = ''
        then cast('00000000'as jv_crdate )
        else crdate
      end                   as JntOpgAgrmtCreationDate,

      chuser                as JntOpgAgrmtLastChangedByUser,

      case when chtime is null or chtime = ''
        then cast('000000' as abap.tims)
        else cast(substring(chtime, 1, 6) as abap.tims)
      end                   as JntOpgAgrmtLastChangedTime,

      case when chdate is null or chdate = ''
        then cast('00000000' as jv_chdate)
        else chdate
      end                   as JntOpgAgrmtLastChangedDate,

      drillp                as JntVntrPrioPerdDrillingIsCalc,
      allwbs                as JntVntrWBSElmntOvhdIsCalc,
      dfpay                 as JntOpgAgrmtDrillingPayRate,
      ndpay                 as JntOpgAgrmtNonDrillingPayRate,

      _CompanyCode,
      _JntOpgAgrmtClass,
      _JntOpgAgrmtText,
      _JntOpgAgrmtEquityTypeGrp,
      _JntOpgAgrmtPartShr
}
```
