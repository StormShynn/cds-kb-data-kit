---
name: I_PRFTCTRCOMPANYCODEASSIGNMENT
description: "PRFTCTRCompany CodeASSIGNMENT"
app_component: EC-PCA-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EC
  - EC-PCA
  - EC-PCA-MD
  - interface-view
  - company-code
  - component:EC-PCA-MD-2CL
  - lob:Other
  - bo:CompanyCode
---
# I_PRFTCTRCOMPANYCODEASSIGNMENT

**PRFTCTRCompany CodeASSIGNMENT**

| Property | Value |
|---|---|
| App Component | `EC-PCA-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingArea` | ✓ | |  |  |  |  |
| `ProfitCenter` | ✓ | |  |  |  |  |
| `CompanyCode` | ✓ | |  | `coalesce( _PrftCtrSpcfcCoCodeAssgmt.CompanyCode, _CompanyCode.CompanyCode )` |  |  |
| `JointVentureObjectType` |  | | `_PrftCtrSpcfcCoCodeAssgmt` | `JointVentureObjectType` |  |  |
| `JointVentureClass` |  | | `_PrftCtrSpcfcCoCodeAssgmt` | `JointVentureClass` |  |  |
| `JointVentureSubClass` |  | | `_PrftCtrSpcfcCoCodeAssgmt` | `JointVentureSubClass` |  |  |
| `JointVenture` |  | | `_PrftCtrSpcfcCoCodeAssgmt` | `JointVenture` |  |  |
| `JointVentureRecoveryCode` |  | | `_PrftCtrSpcfcCoCodeAssgmt` | `JointVentureRecoveryCode` |  |  |
| `JointVentureEquityType` |  | | `_PrftCtrSpcfcCoCodeAssgmt` | `JointVentureEquityType` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PrftCtrSpcfcCoCodeAssgmt` | `I_PrftCtrSpcfcCoCodeAssgmt` | [0..*] |
| `_CompanyCode` | `I_CompanyCode` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IFIPRFTCTRCCASGN',
  compiler.compareFilter: true,
  preserveKey: true
}

@AccessControl.authorizationCheck: #CHECK

@VDM.viewType: #COMPOSITE

@Metadata: {
  ignorePropagatedAnnotations: true
}

@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #M
  },
  supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ],
  modelingPattern: #NONE,
  sapObjectNodeType.name: 'PrftCtrCompanyCodeAssignment'
}

@Analytics:{
  dataCategory: #FACT,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      automatic: false
    }
  }
}

@EndUserText.label: 'Company code assignment to profit center'
define view I_PrftCtrCompanyCodeAssignment
  as select distinct from I_ProfitCenter

  association [0..*] to I_PrftCtrSpcfcCoCodeAssgmt as _PrftCtrSpcfcCoCodeAssgmt on  $projection.ProfitCenter    = _PrftCtrSpcfcCoCodeAssgmt.ProfitCenter
                                                                                and $projection.ControllingArea = _PrftCtrSpcfcCoCodeAssgmt.ControllingArea
  association [0..*] to I_CompanyCode              as _CompanyCode              on  $projection.ControllingArea = _CompanyCode.ControllingArea

{
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingArea',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.foreignKey.association: '_ControllingArea'
  key ControllingArea,
  key ProfitCenter,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'ControllingArea' }
        }]
  key coalesce( _PrftCtrSpcfcCoCodeAssgmt.CompanyCode, _CompanyCode.CompanyCode ) as CompanyCode,
      _PrftCtrSpcfcCoCodeAssgmt.JointVentureObjectType,
      _PrftCtrSpcfcCoCodeAssgmt.JointVentureClass,
      _PrftCtrSpcfcCoCodeAssgmt.JointVentureSubClass,
      _PrftCtrSpcfcCoCodeAssgmt.JointVenture,
      _PrftCtrSpcfcCoCodeAssgmt.JointVentureRecoveryCode,
      _PrftCtrSpcfcCoCodeAssgmt.JointVentureEquityType,

      _ControllingArea,
      _CompanyCode
}
```
