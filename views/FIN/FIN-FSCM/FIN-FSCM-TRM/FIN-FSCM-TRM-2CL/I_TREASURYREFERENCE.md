---
name: I_TREASURYREFERENCE
description: Treasuryreference
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - treasury
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TREASURYREFERENCE

**Treasuryreference**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TreasuryReferenceCategory` | `cast( reftyp as trsy_ref_cat preserving type )` |
| key `TreasuryReferenceNumber` | `cast( refnr as trsy_ref_nmbr preserving type )` |
| `TreasuryReferenceStatus` | `cast( status as trsy_ref_status preserving type )` |
| `TreasuryReferencePaymentDate` | `cast( dzterm as trsy_ref_payment_date preserving type )` |
| `TreasuryReferencePartner` | `cast( kontrh as trsy_ref_business_partner preserving type )` |
| `TrsyRefExtRefIdfr` | `cast( ext_ref_id as trsy_ref_ext_ref preserving type )` |
| `ClassificationOfFinInstr` | `cfi_code` |
| `UniqueProductIdentifier` | `upi` |
| `InternationalSecuritiesIdnNmbr` | `isin` |
| `TreasuryReferenceCreatedByUser` | `cast( cruser as trsy_ref_cruser preserving type )` |
| `TreasuryReferenceCreationDate` | `cast( dcrdat as trsy_ref_dcrdat preserving type )` |
| `TrsyReferenceCreationTime` | `cast( tcrtim as trsy_ref_tcrtim preserving type )` |
| `TrsyReferenceLastChangedByUser` | `cast( upuser as trsy_ref_upuser preserving type )` |
| `TrsyReferenceLastChangeDate` | `cast( dupdat as trsy_ref_dupdat preserving type )` |
| `TrsyReferenceLastChangeTime` | `cast( tuptim as trsy_ref_tuptim preserving type )` |
| `_TreasuryReferenceCategory` | *Association* |
| `_TreasuryReferenceItem` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TreasuryReferenceCategory` | `I_TreasuryReferenceCategory` | [1..1] |
| `_TreasuryReferenceItem` | `I_TreasuryReferenceItem` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Treasury Reference Information'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  usageType: {
    dataClass: #TRANSACTIONAL,
    serviceQuality: #A,
    sizeCategory: #M
  },
  supportedCapabilities: [#ANALYTICAL_DIMENSION,  #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE , #EXTRACTION_DATA_SOURCE],
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'TreasuryReferenceNumber',
  sapObjectNodeType.name: 'TreasuryReference'

}
@Analytics: {
  dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            automatic: true
        }
  },
  dataCategory: #DIMENSION,
  internalName:#LOCAL
}
@Metadata.allowExtensions:true
@VDM.viewType: #BASIC
define view entity I_TreasuryReference
  as select from refh
  association [1..1] to I_TreasuryReferenceCategory as _TreasuryReferenceCategory on  $projection.TreasuryReferenceCategory = _TreasuryReferenceCategory.TreasuryReferenceCategory
  association [1..*] to I_TreasuryReferenceItem     as _TreasuryReferenceItem     on  $projection.TreasuryReferenceCategory = _TreasuryReferenceItem.TreasuryReferenceCategory
                                                                                  and $projection.TreasuryReferenceNumber   = _TreasuryReferenceItem.TreasuryReferenceNumber
{
      /* start suppress warning shlporigin_not_inherited */
      @ObjectModel.foreignKey.association: '_TreasuryReferenceCategory'
  key cast( reftyp      as trsy_ref_cat preserving type )               as TreasuryReferenceCategory,
  key cast( refnr       as trsy_ref_nmbr preserving type )              as TreasuryReferenceNumber,
      /* end suppress warning shlporigin_not_inherited */
      cast( status      as trsy_ref_status preserving type )            as TreasuryReferenceStatus,
      cast( dzterm      as trsy_ref_payment_date preserving type )      as TreasuryReferencePaymentDate,
      cast( kontrh      as trsy_ref_business_partner preserving type )  as TreasuryReferencePartner,
      cast( ext_ref_id  as trsy_ref_ext_ref preserving type )           as TrsyRefExtRefIdfr,
      cfi_code                                                          as ClassificationOfFinInstr,
      upi                                                               as UniqueProductIdentifier,
      isin                                                              as InternationalSecuritiesIdnNmbr,
      cast( cruser      as trsy_ref_cruser preserving type )            as TreasuryReferenceCreatedByUser,
      cast( dcrdat      as trsy_ref_dcrdat preserving type )            as TreasuryReferenceCreationDate,
      cast( tcrtim      as trsy_ref_tcrtim preserving type )            as TrsyReferenceCreationTime,
      cast( upuser      as trsy_ref_upuser preserving type )            as TrsyReferenceLastChangedByUser,
      cast( dupdat      as trsy_ref_dupdat preserving type )            as TrsyReferenceLastChangeDate,
      cast( tuptim      as trsy_ref_tuptim preserving type )            as TrsyReferenceLastChangeTime,

      _TreasuryReferenceCategory,
      _TreasuryReferenceItem
}
```
