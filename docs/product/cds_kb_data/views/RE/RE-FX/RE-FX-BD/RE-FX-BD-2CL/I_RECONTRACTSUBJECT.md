---
name: I_RECONTRACTSUBJECT
description: "Recontractsubject"
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-BD
  - interface-view
  - contract
  - component:RE-FX-BD-2CL
  - lob:Other
---
# I_RECONTRACTSUBJECT

**Recontractsubject**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InternalRealEstateNumber` | ✓ | |  | `intreno` |  |  |
| `REStatusObject` |  | |  | `objnr` |  |  |
| `REContractSubjectDescription` |  | |  | `cast (xcnsubject as vibdcnvdmxcnsubject preserving type )` |  |  |
| `REContractSubjectNumber` |  | |  | `cast (adjustnumber as vibdcnvdmsubjectobjnr preserving type )` |  |  |
| `ExternalId` |  | |  | `extid` |  |  |
| `REAccountingObjectType` |  | |  | `cast(substring(acctobjnr,1,2) as recaobjtype )` |  |  |
| `REAccountingObject` |  | |  | `cast(acctobjnr as rebdvdmacctobjnr preserving type )` |  |  |
| `REContractSubjectType` |  | |  | `cnsubjecttype` |  |  |
| `REContractSubjectClass` |  | |  | `cnsubjectclass` |  |  |
| `_CostCenter` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_InternalOrder` | | ✓ | | | | |
| `_REContractSubjectClass` | | ✓ | | | | |
| `_REContractSubjectType` | | ✓ | | | | |
| `_REAccountingObject` | | ✓ | | | | |
| `_REContract` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_WBSElement` | `I_WBSElementBasicData` | [0..*] |
| `_InternalOrder` | `I_InternalOrder` | [0..*] |
| `_REContractSubjectClass` | `I_REContractSubjectClass` | [0..1] |
| `_REContractSubjectType` | `I_REContractSubjectType` | [0..1] |
| `_REAccountingObject` | `I_REAccountingObject` | [0..1] |
| `_REContract` | `I_REContract` | [1..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IRECONTRACTSUB'
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Real Estate Contract Subject'
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@ObjectModel: {
  representativeKey: 'InternalRealEstateNumber',
  semanticKey: ['REContractSubjectNumber'],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #L
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION, 
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ],
  sapObjectNodeType.name: 'RealEstateContractSubject'
}
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC

define view entity I_REContractSubject
  as select from vibdcnsubject

  association [0..*] to I_CostCenter             as _CostCenter             on $projection.REAccountingObject = _CostCenter.ObjectInternalID
  association [0..*] to I_WBSElementBasicData    as _WBSElement             on $projection.REAccountingObject = _WBSElement.WBSElementObject
  association [0..*] to I_InternalOrder          as _InternalOrder          on $projection.REAccountingObject = _InternalOrder.ControllingObject
  association [0..1] to I_REContractSubjectClass as _REContractSubjectClass on $projection.REContractSubjectClass = _REContractSubjectClass.REContractSubjectClass
  association [0..1] to I_REContractSubjectType  as _REContractSubjectType  on $projection.REContractSubjectType = _REContractSubjectType.REContractSubjectType
  association [0..1] to I_REAccountingObject     as _REAccountingObject     on $projection.REAccountingObject = _REAccountingObject.REAccountingObject
  association [1..1] to I_REContract             as _REContract             on $projection.InternalRealEstateNumber = _REContract.InternalRealEstateNumber
{
  key intreno                                                           as InternalRealEstateNumber,
      objnr                                                             as REStatusObject,
      cast (xcnsubject as vibdcnvdmxcnsubject preserving type )         as REContractSubjectDescription,
      cast (adjustnumber as vibdcnvdmsubjectobjnr preserving type )     as REContractSubjectNumber,
      extid                                                             as ExternalId,
      cast(substring(acctobjnr,1,2) as recaobjtype )                    as REAccountingObjectType,
      cast(acctobjnr as rebdvdmacctobjnr  preserving type )             as REAccountingObject,
      @ObjectModel.foreignKey.association: '_REContractSubjectType'
      cnsubjecttype                                                     as REContractSubjectType,
      cnsubjectclass                                                    as REContractSubjectClass,

      _CostCenter,
      _WBSElement,
      _InternalOrder,
      _REAccountingObject,
      _REContractSubjectClass,
      _REContractSubjectType,
      _REContract

}
```
